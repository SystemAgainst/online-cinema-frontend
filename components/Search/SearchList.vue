<script lang="ts" setup>
import type { IMovie } from "@/shared/types/movie.types";
defineProps<{
  movies: IMovie;
}>()
</script>

<template>
  <div v-if="movies" class="search-list">
    <div v-for="(movie, idx) in movies" :key="idx">
      <NuxtLink to="">
        <NuxtImg 
          :src="movie?.poster" 
          :alt="movie?.title" 
          width="50"
          height="50"
          style="object-fit: cover; object-position: top;"
          draggable="false"
        />
          <span>{{ movie?.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-list {
	@apply absolute border border-gray-700 rounded-layout bg-gray-800 w-full animate-fade z-10;
	top: calc(100% + 15px);

	> a {
		@apply flex items-center py-3 px-4 relative;

		&::after {
			@apply absolute -right-0.5 h-0 w-0.5 bg-transparent;
			content: '';
			top: 28%;
			transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
		}

		&:hover::after {
			@apply bg-primary h-2/5;
		}

		img {
			@apply rounded-image;
		}

		> span {
			@apply ml-3 text-white truncate;

			&:last-child {
				width: 70%;
			}
		}
	}
}

</style>