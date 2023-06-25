import { defineConfig } from "vitepress";
import AutoSideBar from "vite-plugin-vitepress-auto-sidebar";
import header from "./config/header";
import themeConfig from "./config/themeConfig";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import markdown from "./config/markdown";
// 导航条

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Anthony",
	description: "This is my Blog",
	base: "/vitepress.docs.ts/",
	lang: "zh-CN",
	// 头部配置
	head: header,
	// markdown配置
	markdown,
	lastUpdated: true,
	vite: {
		plugins: [
			AutoSideBar({ collapsed: true }),

			// AutoImport({
			//   resolvers: [ElementPlusResolver()],
			// }),

			// Components({
			//   resolvers: [ElementPlusResolver()],
			// }),
		],
	},
	themeConfig
});
