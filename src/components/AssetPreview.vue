<template>
	<div>
		<img
			:src="asset.imageUrl"
			:alt="asset.name"
		>
		<span>
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

<style lang="scss">
</style>
