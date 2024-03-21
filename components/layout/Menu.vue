<script lang="ts" setup>
import { BASIC_MENU, MENU_LIST } from './menu.data';
</script>

<template>
	<div 
		v-for="(menu, index) in MENU_LIST" 
		:key="index"
		class="menu"
	>
		<h2 class="menu__heading">{{ menu.title }}</h2>
		<ul class="menu__container">
			<li 
				v-for="(item, itemIndex) in menu.items" 
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