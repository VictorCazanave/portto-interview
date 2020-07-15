import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import SERVICES from '@/services'

Vue.use(Vuex)

// NOTES:
// This is a quick solution to persist fetched data and handle page refresh.
// Depending on the project needs, refetching data may be a better solution.
const vuexLocal = new VuexPersistence({
	storage: window.sessionStorage,
})

export default new Vuex.Store({
	state: {
		page: 0,
		assets: [],
	},
	mutations: {
		/**
		 * Push new assets
		 *
		 * @param {Object} state - State of store
		 * @param {Object[]} nextAssets - List of new assets to push
		 */
		pushAssets(state, nextAssets) {
			state.assets = [...state.assets, ...nextAssets]
		},

		/**
		 * Increment current page of assets
		 *
		 * @param {Object} state - State of store
		 */
		incrementPage(state) {
			state.page += 1
		},
	},
	actions: {
		/**
		 * Fetch assets of next page
		 *
		 * @param {Object} - Context of store
		 * @returns {Promise<Object[]|null>} List of fetched assets if OK, null if error
		 */
		async fetchNextAssets({ state, commit }) {
			try {
				const nextAssets = await SERVICES.getAssets(state.page)

				commit('pushAssets', nextAssets)
				commit('incrementPage')

				return nextAssets
			} catch (error) {
				return null
			}
		},
	},
	plugins: [vuexLocal.plugin],
})
