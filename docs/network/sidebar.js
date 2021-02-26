const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "HTML",
    collapsable: true,
    children: [
      { title: "互联网基本原理", path: "/network/notes/html/互联网基本原理" },
      { title: "基本标签", path: "/network/notes/html/02-基本标签" },
      { title: "表单元素", path: "/network/notes/html/11-表单" },
    ],
  },
];
