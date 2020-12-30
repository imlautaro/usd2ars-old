<template>
	<div>
        <div v-if="$fetchState.pending">Cargando...</div>
        <div v-else-if="$fetchState.error">Ha ocurrido un error.</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="shadow rounded-md bg-gray-800 w-full">
                <div class="text-xl font-bold p-4 border-b border-gray-700 w-full text-center">Conversor</div>
                <div class="p-4 flex gap-2 items-center">
                    $ <input type="number" v-model="value" class="bg-transparent focus:outline-none w-full" />
                    <button @click="conversorMode = !conversorMode" class="px-4 focus:outline-none py-2 rounded-full border border-gray-700 flex items-center gap-2">
                        {{ conversorMode ? 'ARS' : 'USD' }} <octicons name="arrow-right" size="16"/> <span class="text-green-500">{{ conversorMode ? 'USD' : 'ARS' }}</span>
                    </button>
                </div>
            </div>
            <div class="w-full bg-gray-800 rounded-md shadow overflow-hidden flex flex-col items-center justify-center gap-2" v-for="({ casa }, index) in data" :key="index">
                <div class="text-xl font-bold p-4 border-b border-gray-700 w-full text-center">{{ casa.nombre }}</div>
                <div class="grid grid-cols-2 p-4 w-full">
                    <div class="flex flex-col items-center">
                        <span>Compra:</span>
                        <span class="text-2xl">$ {{ casa.compra }}</span>
                    </div>
                    <div class="flex flex-col items-center text-green-500">
                        <span>Venta:</span>
                        <span class="text-2xl">$ {{ casa.venta }}</span>
                    </div>
                </div>
                <div v-if="value" class="p-4 w-full bg-green-500 text-center text-lg">
                    $ {{ conversorMode ? convertToDollar(casa.venta) : convertToPeso(casa.compra) }}
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            data: null,
            conversorMode: true,
            value: 0
        }
    },
    methods: {
        convertToDollar(x){
            let value = x.replace(',', '.')
            return parseFloat( this.value / parseFloat(value) ).toFixed(2)
        },
        convertToPeso(x){
            let value = x.replace(',', '.')
            return parseFloat( this.value * parseFloat(value) ).toFixed(2)
        }
    },
    async fetch(){
        const result = await this.$axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        this.data = [ 
            result.data[0], // OFICIAL
            result.data[1] // BLUE
        ]
    }
}
</script>
