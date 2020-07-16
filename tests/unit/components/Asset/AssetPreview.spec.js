import { shallowMount } from '@vue/test-utils'
import AssetPreview from '@/components/Asset/AssetPreview.vue'

describe('AssetPreview components', () => {
	const asset = {
		name: 'name',
		imageUrl: 'imageUrl',
	}

	it('renders asset data properly', () => {
		const wrapper = shallowMount(AssetPreview, {
			propsData: { asset },
		})

		expect(wrapper.element).toMatchSnapshot()
	})
})
