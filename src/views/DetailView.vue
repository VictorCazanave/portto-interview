<template>
	<div class="page">
		<header class="page-header header">
			<router-link
				:to="{ name: 'list' }"
				class="previous"
			>
				&lt;
			</router-link>
			<h1>
				{{ asset.collectionName }}
			</h1>
		</header>

		<main class="page-body">
			<div class="page-content">
				<img
					:src="asset.imageUrl"
					:alt="asset.name"
					class="image"
				>

				<span class="name">
					{{ asset.name }}
				</span>

				<p class="description">
					{{ asset.description }}
				</p>
			</div>
		</main>

		<a
			:href="asset.permalink"
			target="_blank"
			rel=”noopener”
			class="permalink"
		>
			Permalink
		</a>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'DetailView',
	computed: {
		...mapState(['assets']),

		asset() {
			return this.assets.find((asset) => asset.tokenId === this.$route.params.tokenId)
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	position: relative;
}

.previous {
	position: absolute;
	left: 1rem;
}

.image {
	width: 100%;
	height: auto;
	margin-bottom: 1rem;
}

.name {
	margin-bottom: 1rem;
	font-size: 1.2rem;
}

.permalink {
	flex: 0 0 auto;
	max-width: 40rem;
	margin: 1rem;
	padding: 0.5rem 1rem;
	border: 2px solid $color-black;
	font-size: 1.2rem;

	&:focus,
	&:hover {
		background-color: $color-grey;
	}
}

@media screen and (min-width: $screen-medium) {
	.permalink {
		width: 30rem;
		margin: 1rem auto;
	}
}
</style>
