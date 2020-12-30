<template>
    <div class="flex flex-col h-screen w-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <div class="flex items-center z-30 justify-between p-4 shadow bg-green-500 text-white">
            <octicons name="flame" />
            <span class="text-lg font-bold">USD2ARS</span>
            <button @click="fetchData()" class="focus:outline-none" :class="data == null ? 'animate-spin' : ''">
                <octicons name="sync" style="transform: scaleX(-1);" />
            </button>
        </div>
        <div class="p-4 h-full w-full overflow-y-auto">
            <nuxt />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['fetchData']),
    }
}
</script>
