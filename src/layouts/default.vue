<template>
    <div class="flex flex-col h-screen w-screen bg-gray-900 text-white">
        <div class="flex items-center justify-between p-4 shadow bg-green-500">
            <octicons name="flame" />
            <span class="text-lg font-bold">USD2ARS</span>
            <a href="https://github.com/imlautaro/usd2ars" target="_blank"><octicons name="mark-github" /></a>
        </div>
        <div class="p-4 h-full w-full overflow-y-auto">
            <nuxt />
        </div>
    </div>
</template>