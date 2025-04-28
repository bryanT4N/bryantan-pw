---
title: 在 Docusaurus 博客中将相对路径引用的图片设置居中并调整大小
authors: [bry4ntan]
tags: [docusaurus, markdown]
---

Markdown 语法不允许图像自由调整大小，而用 Docusaurus 的 HTML 写法引用静态图片要从项目的 `/static` 目录下获取绝对路径，不支持配置相对路径。

<u>解决办法如下</u>：
```md
<div class="text--center">
    <img src={require('./assets/image.png').default} width="70%" />
</div>
```
`<div>` 是使用 Docusaurus 内置的 Infima 类来设置居中，不需要可以去掉。

<!-- truncate -->
---
Docusaurus 博客实际上有多种方式引用图像：

#### 1. 用 Markdown 语法
```md
![img](./assets/image.png)
```
很简洁，但未经拓展的 Markdown 的基础语法并不允许调整图片大小。

这种方式用相对路径能够被正确识别，原因是 Docusaurus 在解析过程中通过 Webpack Loader 把 `![img](./assets/image.png)` 转换成 `<img src={require("./assets/image.png")}/>` 然后获取到了绝对路径。开发人员在这个 [Github Discussion](https://github.com/facebook/docusaurus/discussions/10467) 中有解释说明。

正是因为它要经过转换处理，实际上这种用法也可以填静态资源的绝对路径，详见 [Docusaurus 文档：在 Markdown 中引用静态资源](https://docusaurus.io/docs/static-assets#in-markdown)。

#### 2. 在 Markdown 中写 HTML
```md
<img src="/img/image.png"  width="70%" />
```
好处是我们可以调整图片大小了，坏处是这种方式填相对路径会找不到文件，Docusaurus 总是会视为引用静态资源的绝对路径。

解决的办法就是用开头的 `<img src={require('./assets/image.png').default} />` ，实际上就是手动借用了第1种方式的转换来获取绝对路径。

#### 3. 用 `import` 导入图像源

参考 stackoverflow 上的这个[帖子](https://stackoverflow.com/questions/58265585/change-image-size-in-docusaurus)。


