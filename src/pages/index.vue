<template>
	<div>
		<div
			v-if="data == null"
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
		>
			<div
				class="w-full rounded-md h-32 bg-white dark:bg-gray-800 animate-pulse"
			></div>
			<div
				class="w-full rounded-md h-32 bg-white dark:bg-gray-800 animate-pulse"
			></div>
			<div
				class="w-full rounded-md h-32 bg-white dark:bg-gray-800 animate-pulse"
			></div>
			<div
				class="w-full rounded-md h-32 bg-white dark:bg-gray-800 animate-pulse"
			></div>
		</div>
		<div v-else-if="data == false">Ha ocurrido un error.</div>
		<div
			v-else
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
		>
			<card class="w-full">
				<div
					class="text-xl font-bold p-4 border-b border-gray-200 dark:border-gray-700 w-full text-center"
				>
					Conversor
				</div>
				<div class="p-4 flex gap-2 items-center">
					<div
						class="focus-within:ring-2 ring-black ring-opacity-10 flex gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 w-full"
					>
						$
						<input
							type="number"
							v-model="value"
							placeholder="Cantidad"
							class="bg-transparent focus:outline-none w-full"
						/>
					</div>
					<button
						@click="conversorMode = !conversorMode"
						class="px-4 focus:outline-none focus:ring-2 ring-black ring-opacity-10 py-2 rounded-full border border-gray-200 dark:border-gray-700 flex items-center gap-2"
					>
						{{ conversorMode ? 'ARS' : 'USD' }}
						<octicons name="arrow-right" size="16" />
						<span class="text-green-500">{{
							conversorMode ? 'USD' : 'ARS'
						}}</span>
					</button>
				</div>
			</card>
			<card
				class="w-full flex flex-col items-center justify-center gap-2"
				v-for="({ casa }, index) in data"
				:key="index"
			>
				<div
					class="text-xl font-bold p-4 border-b border-gray-200 dark:border-gray-700 w-full text-center"
				>
					{{ casa.nombre }}
				</div>
				<div class="grid grid-cols-2 p-4 w-full">
					<div class="flex flex-col items-center">
						<span>Compra:</span>
						<span class="text-2xl"
							>{{ casa.compra != 'No Cotiza' ? '$' : '' }}
							{{ casa.compra }}</span
						>
					</div>
					<div class="flex flex-col items-center text-green-500">
						<span>Venta:</span>
						<span class="text-2xl">$ {{ casa.venta }}</span>
					</div>
				</div>
				<div
					v-if="value"
					class="flex p-4 w-full bg-green-500 text-center text-lg text-white"
				>
					<div v-if="casa.compra !== 'No Cotiza'" class="w-full">
						$
						{{
							conversorMode
								? convertToDollar(casa.compra)
								: convertToPeso(casa.compra)
						}}
					</div>
					<div v-else class="flex items-center justify-center w-full">
						<octicons name="circle-slash" />
					</div>
					<div class="w-full">
						${{
							conversorMode
								? convertToDollar(casa.venta)
								: convertToPeso(casa.venta)
						}}
					</div>
				</div>
			</card>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			conversorMode: true,
			value: 0,
		}
	},
	computed: {
		...mapState(['data']),
	},
	methods: {
		...mapActions(['fetchData']),
		convertToDollar(x) {
			let value = x.replace(',', '.')
			return parseFloat(this.value / parseFloat(value)).toFixed(2)
		},
		convertToPeso(x) {
			let value = x.replace(',', '.')
			return parseFloat(this.value * parseFloat(value)).toFixed(2)
		},
	},
	mounted() {
		this.fetchData()
	},
}
</script>
