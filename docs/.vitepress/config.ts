import { defineConfig } from "vitepress";
import AutoSideBar from "vite-plugin-vitepress-auto-sidebar";

// 导航条
import navList from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Anthony",
	description: "This is my Blog",
	base: "/vitepress.docs.ts/",
	markdown: {
		lineNumbers: true, // 显示代码行数
	},

	lastUpdated: true,

	vite: {
		plugins: [AutoSideBar({ collapsed: true })],
	},

	

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: navList,

		// 搜索功能
		search: {
			provider: "local",
		},

		// 更新时间
		lastUpdatedText: "Update time",

		footer: {
			message: "随缘笔记",
			copyright: "Copyright © 2023-Anthony Blog",
		},

		docFooter: {
			prev: "上一页",
			next: "下一页",
		},

		editLink: {
			pattern: "https://thewinnerof.github.io/vitepress.docs.ts/",
			text: "不妥之处，敬请雅正",
		},

		// 侧边栏
		// sidebar: [
		// 	{
		// 		text: "Examples",
		// 		items: [
		// 			{ text: "Markdown Examples", link: "/markdown-examples" },
		// 			{ text: "Runtime API Examples", link: "/api-examples" },
		// 		],
		// 	},
		// ],

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
});
