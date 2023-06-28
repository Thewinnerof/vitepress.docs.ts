const navList: any = [
  { text: "首页", link: "/" },
  { text: "快捷导航", link: "/navigation/" },
  { text: "面试题", link: "/aboutme" },
  { text: "算法&数据结构", link: "/aboutme" },
  { text: "工程化", link: "/aboutme" },
  { text: "源码", link: "/sources/1.本平台相关功能配置/1.介绍" },
  {
    text: "Web",
    items: [
      { text: "大纲", link: "/markdown-examples" },

      {
        items: [
          { text: "Vue3", link: "/Web/Vue3相关/" },
          { text: "Ts", link: "/item-A2" },
        ],
      },
      {
        items: [
          { text: "Python", link: "/api-examples" },
          { text: "Node.js", link: "/markdown-examples" },
        ],
      },
    ],
  },
  { text: "关于我", link: "/Aboutme/关于我" },
];

export default navList;
