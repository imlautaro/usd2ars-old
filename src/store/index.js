import axios from 'axios'

const api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

export const state = () => ({
	data: undefined,
})

export const mutations = {
	setData(state, data) {
		state.data = data
	},
}

export const actions = {
	async fetchData({ commit }) {
		try {
			commit('setData', undefined)
			const result = await axios.get(api)
			const data = [
				result.data[0], // Oficial
				result.data[1], // Blue
				result.data[6], // Turista
			]
			commit('setData', data)
		} catch (error) {
			commit('setData', false)
		}
	},
}
