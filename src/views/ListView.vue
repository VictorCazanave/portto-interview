<template>
	<div class="page">
		<h1 class="header">
			List of Assets
		</h1>

		<div
			v-if="assets.length > 0"
			class="content"
		>
			<ul class="list">
				<li
					v-for="asset in assets"
					:key="asset.tokenId"
					class="item"
				>
					<router-link :to="{ name: 'detail', params: { tokenId: asset.tokenId } }">
						<AssetPreview :asset="asset" />
					</router-link>
				</li>
			</ul>

			<LoadingInfinite @infinite="handleInfiniteScroll" />
		</div>

		<LoadingSpinner
			v-else
			class="loading"
		/>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoadingSpinner from '@/components/Loading/LoadingSpinner.vue'
import LoadingInfinite from '@/components/Loading/LoadingInfinite.vue'
import AssetPreview from '@/components/Asset/AssetPreview.vue'

export default {
	name: 'ListView',
	components: {
		LoadingSpinner,
		LoadingInfinite,
		AssetPreview,
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

		/**
		 * Handle infinite scroll to fetch next assets
		 * Doc: https://peachscript.github.io/vue-infinite-loading/api/#infinite
		 *
		 * @param {Object} $state - Special event argument of vue-infinite-loading component
		 * @returns {Promise}
		 */
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

<style lang="scss" scoped>
.loading {
	margin: 2rem auto;
}

.list {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}

.item {
	margin-bottom: 1rem;
}

@media screen and (min-width: $screen-medium) {
	.list {
		flex-direction: row;
		justify-content: space-evenly;
	}

	.item {
		flex: 0 0 45%;
		margin-bottom: 2rem;
	}
}
</style>
