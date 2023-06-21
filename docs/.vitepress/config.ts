import { defineConfig } from "vitepress";
import AutoSideBar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Anthony",
	description: "This is my Blog",
	base: "/vitepress.docs.ts/",
	markdown: {
		lineNumbers: true, // 显示代码行数
	},

	vite: {
		plugins: [AutoSideBar({ collapsed: true })],
	},

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "快捷导航", link: "/navigation/" },
			{
				text: "Web",
				items: [
					{ text: "大纲", link: "/Web/" },

					{
						items: [
							{ text: "Vue3", link: "/Web/Vue3相关/" },
							{ text: "Ts", link: "/item-A2" },
						],
					},
					{
						items: [
							{ text: "Python", link: "/item-B1" },
							{ text: "Node.js", link: "/item-B2" },
						],
					},
				],
			},
			{ text: "关于我", link: "/aboutme" },
		],

		// 搜索功能
		search: {
			provider: "local",
		},
		// 更新时间
		lastUpdatedText: "更新时间",

		footer: {
			message: "随缘笔记",
			copyright: "Copyright © 2023-Anthony Blog",
		},

		docFooter: {
			prev: "上一页",
			next: "下一页",
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
