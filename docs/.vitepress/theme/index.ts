// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import Comment_component from "../theme/components/comment/comment.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
	...Theme,
	Layout: () => {
		return h(Theme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},

	enhanceApp({ app }) {
		app.component("Comment", Comment_component);
		app.use(ElementPlus);
	},
};
