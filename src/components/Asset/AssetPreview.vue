<template>
	<div class="preview">
		<img
			:src="asset.imageUrl"
			:alt="asset.name"
			class="image"
		>

		<span class="name">
			{{ asset.name }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'AssetPreview',
	props: {
		asset: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.preview {
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 2px solid $color-black;
	padding: 1rem;

	&:focus,
	&:hover {
		background: $color-grey;
	}
}

.image {
	height: 10rem; // NOTE: Arbitrary value
	width: auto;
	margin-bottom: 1rem;
}

.name {
	font-size: 1.2rem;
}
</style>
