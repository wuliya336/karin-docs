# 快速上手

欢迎使用 Karin! 这是一个现代化的机器人开发框架，让我们开始探索 Karin 的魅力吧！

## 🚀 部署步骤

### 1. 环境安装

::: tip 友情提示
如果有以下环境，可跳过此处
- Node.js `20+`
- pnpm 包管理器 `v9`
- Git (可选，用于`Git`插件管理) `LTS`
:::

<br>
<NCard title="🎉 点击查看环境安装教程" link="../install/environment">
ps: ∑(っ°Д°;)っ真的很难安装吗？
</NCard>

### 2. 框架安装

::: tip 友情提示
这一步安装的时候请检查自己的`pnpm`版本是否符合要求
:::

<br>
<NCard title="🎉 点击查看框架安装教程" link="../install/framework">
ps: 注意 pnpm 版本哦 (*^▽^*)
</NCard>

### 3. 网页控制台

::: warning 友情提示
karin默认开启了一个网页控制台，可以查看管理机器人
:::

<br>
<NCard title="🎉 点击查看网页控制台文档" link="../web">
ps: 正在快速开发中~
</NCard>

### 4. 接入适配器

::: tip 友情提示
支持所有符合 `OneBot11` 标准的适配器
:::

<br>
<NCard title="🎉 点击查看接入适配器文档" link="../install/platform">
ps: 呜呜呜，别骂了，这就去写icqq适配器 o(ﾟДﾟ)っ！
</NCard>

## 🤔 遇到问题？

<div class="help-section">
  <p>我们提供多种途径获取帮助：</p>
  <ul>
    <li>📖 查看 <a href="../faq">常见问题</a></li>
    <li>💬 加入 <a href="https://qm.qq.com/q/NJzHJpyIou">交流群</a> 与其他开发者交流</li>
    <li>🐞 在 <a href="https://github.com/KarinJS/Karin/issues">Github Issues</a> 报告问题</li>
    <li>📝 查阅 <a href="../guide/index">详细文档</a></li>
  </ul>
</div>

## 🎯 下一步

<div class="next-steps">
  <h3>开发者指南</h3>
  <ul>
    <li><a href="../dev/plugin">插件开发</a> - 学习如何开发自己的插件</li>
    <li><a href="../api">API 文档</a> - 查看详细的 API 文档</li>
    <li><a href="../guide/best-practices">最佳实践</a> - 了解使用 Karin 的最佳实践</li>
  </ul>

  <h3>示例项目</h3>
  <ul>
    <li><a href="../examples/plugins">插件示例</a> - 常用插件开发示例</li>
    <li><a href="../examples/config">配置示例</a> - 框架配置的最佳实践</li>
    <li><a href="../examples/deployment">部署示例</a> - 生产环境部署指南</li>
  </ul>
</div>

## 🎁 社区资源

<div class="community-resources">
  <ul>
    <li><a href="../plugins">插件市场</a> - 发现更多有趣的插件</li>
    <li><a href="../themes">主题商店</a> - 个性化你的机器人</li>
    <li><a href="../snippets">代码片段</a> - 常用功能代码示例</li>
  </ul>
</div>

## 💪 参与贡献

<div class="contribution">
  <p>我们欢迎任何形式的贡献：</p>
  <ul>
    <li>🐛 提交 Bug 报告</li>
    <li>💡 提出新功能建议</li>
    <li>📝 改进文档内容</li>
    <li>🔧 提交代码修复</li>
    <li>⭐ 给项目点个星星</li>
  </ul>
  <p>让我们一起把 Karin 打造得更好！</p>
</div>

<style>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}

.feature {
  padding: 20px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.env-list ul {
  list-style: none;
  padding-left: 20px;
}

.warning {
  padding: 16px;
  border-radius: 8px;
  background: var(--vp-c-warning-soft);
  margin: 16px 0;
}

.code-block {
  background: var(--vp-c-bg-soft);
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.adapter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0;
}

.help-section ul,
.next-steps ul,
.community-resources ul,
.contribution ul {
  list-style: none;
  padding-left: 20px;
}
</style>