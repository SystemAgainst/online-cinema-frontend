<script lang="ts" setup>
// TODO: mb create skeleton for menu items
</script>

<template>
	<div class="navigation">
		<NuxtLink to="/" class="px-layout mb-10 block">
			<NuxtImg src="/logo.svg" alt="Logo of online cinema" width="247" height="37" />
		</NuxtLink>
		<LayoutMenu />
	</div>
</template>

<style scoped lang="scss">
.navigation {
  @apply py-layout;
}
</style>