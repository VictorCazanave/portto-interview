<template>
	<div id="app">
		<LoadingSpinner v-if="loading" />
		<router-view v-else></router-view>
	</div>
</template>

<script>
import Web3 from 'web3'
import SERVICES from '@/services'
import LoadingSpinner from '@/components/Loading/LoadingSpinner.vue'

export default {
	name: 'App',
	components: {
		LoadingSpinner,
	},
	data() {
		return {
			loading: true,
		}
	},
	created() {
		this.init()
	},
	methods: {
		async init() {
			try {
				const web3 = new Web3(Web3.givenProvider)
				const accounts = await web3.eth.getAccounts()

				SERVICES.setEthereumAccount(accounts[0])
			} catch (error) {
				// TODO: Handle error properly
				console.error('Error getting Ethereum Account')
			} finally {
				this.loading = false
			}
		},
	},
}
</script>
