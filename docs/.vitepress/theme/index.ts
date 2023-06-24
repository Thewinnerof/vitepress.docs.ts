// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";

// 自定义全局组件
import Comment_component from "../theme/components/comment/comment.vue";
import Notification_component from "../theme/components/Feedback/notification.vue";
import ArticleHeader_component from "../theme/components/ArticleHeader/articleMetadata.vue";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },

  enhanceApp({ app }) {
    app.component("Comment", Comment_component);
    app.component("Notification", Notification_component);
    app.component("ArticleHeader", ArticleHeader_component);
    // app.use(ElementPlus);
  },
};
