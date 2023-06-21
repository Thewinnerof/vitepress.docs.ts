const navList: any = [
	{ text: "首页", link: "/" },
	{ text: "快捷导航", link: "/navigation/" },
	{ text: "面试题", link: "/aboutme" },
	{ text: "算法&数据结构", link: "/aboutme" },
	{ text: "工程化", link: "/aboutme" },
	{ text: "源码", link: "/aboutme" },
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
];

export default navList;
