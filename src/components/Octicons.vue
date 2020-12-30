<template>
	<div class="octicons fill-current" v-html="icon"></div>
</template>

<script>
export default {
	props: ['name', 'size'],
	computed: {
		icon() {
			const name = this.name != undefined ? this.name : 'octoface'
			const size = this.size != undefined ? this.size : 24
			try {
				const icon = this.$octicons[name].toSVG({ width: size })
				return icon
			} catch {
				const icon = this.$octicons['octoface'].toSVG({ width: size })
				return icon
			}
		},
	},
}
</script>

<style>
.octicons {
	display: flex;
}
</style>
