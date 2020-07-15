<template>
	<div>
		<h1>List of Assets</h1>

		<template v-if="assets.length > 0">
			<ul>
				<li
					v-for="asset in assets"
					:key="asset.tokenId"
				>
					<router-link :to="{ name: 'detail', params: { tokenId: asset.tokenId } }">
						<AssetPreview :asset="asset" />
					</router-link>
				</li>
			</ul>
			<infinite-loading @infinite="handleInfiniteScroll"></infinite-loading>
		</template>

		<div v-else>Loading ...</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AssetPreview from '@/components/AssetPreview.vue'
import InfiniteLoading from 'vue-infinite-loading'

export default {
	name: 'ListView',
	components: {
		AssetPreview,
		InfiniteLoading,
	},
	computed: {
		...mapState(['assets']),
	},
	created() {
		// Fetch assets only on first load
		if (this.assets.length === 0) {
			this.fetchNextAssets()
		}
	},
	methods: {
		...mapActions(['fetchNextAssets']),

		async handleInfiniteScroll($state) {
			const nextAssets = await this.fetchNextAssets()

			if (nextAssets === null) {
				$state.error()
			} else if (nextAssets.length > 0) {
				$state.loaded()
			} else {
				$state.complete()
			}
		},
	},
}
</script>

<style lang="scss">
</style>
