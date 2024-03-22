<script lang="ts" setup>
import { BASIC_MENU, GENERAL_MENU } from './menu.data';


const { data: genres } = await useAsyncData(
  'popular-genre-list',
  () => $fetch('http://localhost:7070/api/v1/genres?searchTerm')
);
</script>

<template>
	<div class="menu">
		<h2 class="menu__heading">{{ BASIC_MENU.title }}</h2>
		<ul class="menu__container mb-20">
			<li 
				v-for="(item, itemIndex) in BASIC_MENU.items"
				:key="itemIndex"
				class="menu__list"
				:exact="true"
				:class="{ 'active': $route.path === item.link }"
				>
					<NuxtLink :to="item.link" class="menu__link">
						<Icon :name="item.icon" class="menu__item-icon" />
						<span class="menu__item-text">{{ item.title }}</span>
					</NuxtLink>
			</li>
		</ul>

		<h2 class="menu__heading">Popular Genres</h2>
		<ul class="menu__container">
			<li 
				class="menu__list"
				v-for="(item, idx) in genres"
				:key="idx"
			>
				<NuxtLink :to="item?.slug" class="menu__link">
					<span class="menu__item-text">{{ item.name }}</span>
				</NuxtLink>
			</li>
		</ul>
  </div>
</template>

<style scoped lang="scss">
.menu {
	@apply mb-14 animate-fade;

	.menu__heading {
		@apply text-gray-500 uppercase text-sm font-semibold pl-layout;
	}

	.menu__container {
		> .menu__list {
			@apply px-8 border-r-4 border-r-transparent transition-colors;
			> .menu__link {
				@apply flex items-center text-gray-600 px-3 mt-6 cursor-pointer;

				> .menu__item-text {
					@apply ml-3 text-lg hover:text-white;
				}

				> .menu__item-icon {
					@apply text-2lg;
				}

				> .menu__item-text,
				> .menu__item-icon {
					@apply transition-colors;
				}
			}

			// TODO: It doesn't work yet. Update it later
			// &.active {
			// 	@apply border-r-primary;
			// 	> .menu__link > .menu__item-text {
			// 		@apply text-white;
			// 	}

			// 	> .menu__link > .menu__item-icon {
			// 		@apply fill-primary;
			// 	}
			// }
		}
	}
}
</style>