<template>
	<button
		aria-label="Actualizar información"
		class="hover:bg-white hover:bg-opacity-5 p-3 -m-3 focus:outline-none focus:ring-2 ring-white ring-opacity-10 rounded-full"
		@click="$store.dispatch('fetchData')"
		:class="$store.state.data == undefined ? 'animate-spin' : ''"
	>
		<octicons v-if="$store.state.data === false" name="x" />
		<octicons v-else name="sync" style="transform: scaleX(-1);" />
	</button>
</template>
