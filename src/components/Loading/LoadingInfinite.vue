<template>
	<infinite-loading v-on="$listeners">
		<template #spinner>
			<LoadingSpinner />
		</template>

		<template #no-more>
			No more assets
		</template>
	</infinite-loading>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import LoadingSpinner from './LoadingSpinner.vue'

/**
 * Infinite scroll to load paginated data
 *
 * Wrapper of vue-infinite-loading to:
 * - avoid clutter in list view
 * - make it eventually re-usable in other views
 */
export default {
	name: 'LoadingInfinite',
	components: {
		InfiniteLoading,
		LoadingSpinner,
	},
}
</script>
