import Vue from 'vue'
import Vuex from 'vuex'
import SERVICES from '@/services'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		page: 0,
		assets: [],
	},
	mutations: {
		pushAssets(state, nextAssets) {
			state.assets = [...state.assets, ...nextAssets]
		},
		incrementPage(state) {
			state.page += 1
		},
	},
	actions: {
		async fetchNextAssets({ state, commit }) {
			try {
				console.log('PAGE', state.page)
				const nextAssets = await SERVICES.getAssets(state.page)

				console.log('NEXT', nextAssets)

				commit('pushAssets', nextAssets)
				commit('incrementPage')

				return nextAssets
			} catch (error) {
				// TODO: Handle error
				console.log('ERROR', error)

				return null
			}
		},
	},
})
