<script lang="ts" setup>
defineProps<{
  searchTerm: string;
}>();

const emit = defineEmits(["update:searchTerm"]);

const handleSearch = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('update:searchTerm', inputValue);
};
</script>

<template>
  <div class="search">
    <Icon name="radix-icons:magnifying-glass" style="color: white;" />
    <input 
      placeholder="Search" 
      :value="searchTerm" 
      @input=handleSearch 
    />
  </div>
</template>

<style scoped lang="scss">
.search {
	@apply rounded-3xl border border-gray-700 px-3 py-2 flex items-center transition-colors;

	> svg {
		@apply fill-gray-600 mr-2 text-3xl transition-colors;
	}

	> input {
		@apply text-white placeholder:text-gray-600 block w-full bg-transparent outline-none;
	}

	&:focus-within {
		@apply border-gray-600;
		> svg {
			@apply fill-gray-500;
		}
	}
}

</style>