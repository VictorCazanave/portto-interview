import 'whatwg-fetch'

const DEFAULT_ETHEREUM_ACCOUNT = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'
const PAGE_SIZE = 20

let ethereumAccount

export default {
	/**
	 * Set ethereum account to use for requests
	 *
	 * @param {string} account - Ethereum account
	 */
	setEthereumAccount(account) {
		ethereumAccount = account || DEFAULT_ETHEREUM_ACCOUNT
	},

	/**
	 * Get list of assets of provided page
	 *
	 * @param {number} page - Page to fetch
	 * @returns {Promise<Object[]>} List of assets
	 */
	async getAssets(page) {
		const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${ethereumAccount}&offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`)
		const data = await response.json()

		// Format response data to keep a consistent API in components:
		// camelCase, only necessary properties...
		return data.assets.map((asset) => ({
			tokenId: asset.token_id,
			name: asset.name,
			imageUrl: asset.image_url,
			description: asset.description,
			permalink: asset.permalink,
			collectionName: asset.collection.name,
		}))
	},
}
