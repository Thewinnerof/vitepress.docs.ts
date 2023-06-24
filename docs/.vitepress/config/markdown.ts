import { MarkdownOptions } from "vitepress";

const markdown: MarkdownOptions = {
  lineNumbers: true, // 显示行号

  //   在所有文档的<h1>标签后添加头部组件
  config: (md) => {
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === "h1") htmlResult += `\n<ArticleHeader />`;

      return htmlResult;
    };
  },
};

export default markdown;
