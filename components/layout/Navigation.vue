<script lang="ts" setup>
// TODO: mb create skeleton for menu items
</script>

<template>
	<aside class="navigation">
		<NuxtLink to="/" class="px-layout mb-10 block">
			<NuxtImg src="/logo.svg" alt="Logo of online cinema" width="247" />
		</NuxtLink>
		<button
			class="absolute top-2 right-3 transition-colors hover:text-primary"
		>
			<Icon name="line-md:logout" size="20" style="color: white;" />
		</button>
		<LayoutMenu />
	</aside>
</template>

<style scoped lang="scss">
.navigation {
  @apply py-layout;
}
</style>