<script setup>
import { ref, watch } from 'vue';
import { useAsyncData } from '#app';

import UiSearchField from '@/components/ui/UiSearchField.vue';
import SearchList from '@/components/Search/SearchList.vue';


const search = ref('');
const moviesData = ref([]);

watch(search, () => {
	useAsyncData(
		'searchTerm',
		() => $fetch(`http://localhost:7070/api/v1/movies?searchTerm`, {
			params: {
				searchTerm: search.value,
			},
		}),
	).then((res) => {
		moviesData.value = res.data.value;
	});
});

const handleSearch = (value) => search.value = value;
</script>

<template>
	<div class="search__wrapper">
		<!-- Поисковое поле, где :searchTerm связано с реактивной ссылкой search -->
		<UiSearchField :searchTerm="search" @update:searchTerm="handleSearch" />
		<!-- Условное отображение списка фильмов или сообщения об ошибке -->
		<div v-if="moviesData">
			<SearchList :movies="moviesData" />
		</div>
		<div v-else class="loading-state">
			Loading...
		</div>
	</div>
</template>


<style scoped lang="scss">
.search__wrapper {
	@apply relative;
}
</style>