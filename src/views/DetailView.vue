<template>
	<div>
		Detail View

		<template v-if="asset">
			<span>{{ asset.collectionName }}</span>
			<AssetPreview :asset="asset" />
			<span>
				{{ asset.description }}
			</span>

			<a :href="asset.permalink">Permalink</a>
		</template>

		<div v-else>
			ERROR
		</div>

	</div>
</template>

<script>
import { mapState } from 'vuex'
import AssetPreview from '@/components/AssetPreview.vue'

// TODO: Handle fallback (request or localStorage) when reload
export default {
	name: 'DetailView',
	components: {
		AssetPreview,
	},
	computed: {
		...mapState(['assets']),

		asset() {
			return this.assets.find((asset) => asset.tokenId === this.$route.params.tokenId)
		},
	},
}
</script>

<style lang="scss">
</style>
