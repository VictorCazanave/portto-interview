import { enableFetchMocks } from 'jest-fetch-mock'
import SERVICES from '@/services'

// Mock fetch response
enableFetchMocks()
const mockedFetch = fetch.mockResponse(
	JSON.stringify({
		assets: [{
			token_id: 'token id',
			name: 'name',
			image_url: 'image url',
			description: 'description',
			permalink: 'permalink',
			collection: {
				name: 'collection name',
			},
		}],
	}),
)

describe('Services', () => {
	describe('getAssets', () => {
		it('requests correct URL', async () => {
			await SERVICES.getAssets(2)

			expect(mockedFetch).toHaveBeenCalledWith('https://api.opensea.io/api/v1/assets?owner=0x960DE9907A2e2f5363646d48D7FB675Cd2892e91&offset=40&limit=20')
		})

		it('returns list of formatted assets', async () => {
			const assets = await SERVICES.getAssets(0)

			expect(assets).toEqual([{
				tokenId: 'token id',
				name: 'name',
				imageUrl: 'image url',
				description: 'description',
				permalink: 'permalink',
				collectionName: 'collection name',
			}])
		})
	})
})
