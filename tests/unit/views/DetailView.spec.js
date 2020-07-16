import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import DetailView from '@/views/DetailView.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('DetailView', () => {
	const assets = [
		{
			tokenId: 'tokenId0',
			name: 'name0',
			imageUrl: 'imageUrl0',
			description: 'description0',
			permalink: 'permalink0',
			collectionName: 'collectionName0',
		},
		{
			tokenId: 'tokenId1',
			name: 'name1',
			imageUrl: 'imageUrl1',
			description: 'description1',
			permalink: 'permalink1',
			collectionName: 'collectionName1',
		},
	]
	const store = new Vuex.Store({
		state: { assets },
	})
	const wrapper = shallowMount(DetailView, {
		store,
		localVue,
		mocks: {
			$route: {
				params: {
					tokenId: 'tokenId1',
				},
			},
		},
		stubs: ['router-link'],
	})

	it('renders asset data properly', () => {
		expect(wrapper.element).toMatchSnapshot()
	})
})
