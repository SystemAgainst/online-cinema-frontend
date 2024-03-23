<script lang="ts" setup>
const debouncedValue = ref("");
</script>

<template>
  <div class="search__wrapper">
    <UiSearchField search-term=""/>
  </div>
</template>

<style scoped land="scss">
.search__wrapper {
	@apply relative;
}
</style>