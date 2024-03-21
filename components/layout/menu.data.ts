import { type IMenu } from "./menu.interfaces";

export const BASIC_MENU: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'radix-icons:home',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'radix-icons:globe',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'radix-icons:bar-chart',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'radix-icons:arrow-top-right',
			link: '/trending',
			title: 'Trending now',
		},
	],
};

export const GENERAL_MENU: IMenu = {
	title: 'General',
	items: [],
};

export const MENU_LIST: IMenu[] = [BASIC_MENU, GENERAL_MENU];
