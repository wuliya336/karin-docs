# 快速上手

## 1. 环境准备

### Node.js <Badge type="danger" text="铛铛铛！必需品" />

<br>
<Pill name="Node.js官网" link="https://nodejs.org/zh-cn" />

`Karin`是一个基于`Node.js`开发的可爱机器人框架，在 <Pill name="MIT License" link="../license" /> 下开源~ 

> 🌟 推荐使用 Node.js 的 LTS 版本(v20+)，这样可以获得最稳定的体验哦！

小贴士：
- 最低支持 v18+，推荐使用 v20+ 
- 虽然理论上支持 v16+，但是为了获得最佳体验还是推荐使用更新版本啦
- 大多数插件开发者都在用 v20+，所以跟着大家一起用 v20+ 准没错！
- 当然啦，如果你只是想尝鲜，用其他版本也不是不可以 😉

### Git <Badge type="warning" text="可选，但强烈推荐！" />

> [!TIP] 小窍门
> 如果下载速度太慢，试试使用国内的镜像源吧，npmmirror 提供的源速度贼快！

📥 下载链接：
- <Pill name="Git官网" link="https://git-scm.com/" />
- <Pill name="32位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-32-bit.exe" />
- <Pill name="64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-64-bit.exe" />
- <Pill name="ARM64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-arm64.exe" />

💡 小提示：虽然说是可选的，但是大多数好玩的插件都是通过 Git 安装的，所以还是装上吧！


## 2. 部署 Karin

### 全局安装`pnpm`

如果已经安装过的小伙伴可以直接跳到 [下一步](#安装) 啦！

::: code-group

```bash [官方源]
npm install pnpm -g  # 安装包管理器，启动！
```

```bash [国内源]
npm --registry=https://registry.npmmirror.com install pnpm -g  # 国内加速版！
```

:::

### 安装

🎮 开始安装：
- 找一个干净的目录（越空越好！）
- 运行下面这个魔法咒语：

```bash
pnpm create karin
```

然后就是一些简单的选择啦：
- 用方向键选择，回车确认
- 不知道选什么？全部默认就对啦！
- puppeteer 是用来生成图片的，不需要的话可以跳过哦 

::: warning 友情提示
国内的小伙伴们注意啦！如果访问官方源太慢，咱们换个源吧！
:::

::: details 点击查看换源大法

🚀 换源指南：

::: code-group

```bash [淘宝源]
# 推荐使用这个，速度杠杠的！
npm config set registry https://registry.npmmirror.com
```

```bash [腾讯源]
# 淘宝源不行？试试腾讯源！
npm config set registry https://mirrors.cloud.tencent.com/npm
```

```bash [官方源]
# 想换回官方源也可以哦
npm config set registry https://registry.npmjs.org
```

```bash [查看当前源]
# 看看现在用的是哪个源
npm config get registry
```

:::

### 3. 常用指令

> [!NOTE] 小贴士
> 文档可能会有点落后于版本，随时用 `npx karin` 查看最新指令哦！
> 
> 前台启动时请保持窗口开启，想关闭用 `Ctrl+C` 就好啦~
> 
> 后台运行的话随便关窗口，要停止就用 `npx karin stop`

::: code-group

```bash [创建项目]
# 如果用了上面的 pnpm create karin 就不用这个啦！
npx karin init
```

```bash [查看所有指令]
npx karin  # 解锁更多操作！
```

:::

📝 日常会用到的指令：
::: code-group

```bash [前台启动]
npx karin .  # 开始冒险！
```

```bash [后台运行]
npx karin pm2  # 悄悄在后台运行
```

```bash [停止运行]
npx karin stop  # 暂时休息一下
```

```bash [重启服务]
npx karin rs  # 刷新一下！
```

```bash [查看日志]
npx karin log  # 看看发生了什么
```

```bash [更新全部]
npx karin up  # 升级打怪！
```

```bash [查看版本]
npx karin -v  # 看看当前版本
```

:::

### 懒人福利

觉得每次都要输入`npx`太麻烦？来试试全局安装：

```bash
npm install -g @karinjs/cli  # 安装全局命令
```

这样就可以直接使用`karin`命令啦：

```bash
karin  # 更简单！
karin pm2  # 更快捷！
```

## 寻找插件

想要给你的 Karin 添加新功能？来这里找找：
- 去 Github 搜索 `karin-plugin`，有很多好玩的！
- 看看我们的 [插件商店](../plugins/index)

**<mark>更多精彩内容正在开发中...想要开发插件的小伙伴可以看看右上角的开发指南哦！</mark>**

## 特别感谢

- `Karin` 最初是从 [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) 获得灵感，感谢所有 `Miao-Yunzai` 的贡献者们！

- 特别感谢 [喵喵大佬](https://github.com/yoimiya-kokomi) 对许可证相关事项的大力支持！

- 为了提供更好的开发体验，`Karin` 使用 `TypeScript` 完全重写，并采用更自由的 `MIT` 协议开源。

感谢这些可爱的开发者们对 `Karin` 的贡献：

[![贡献者](https://contributors-img.web.app/image?repo=KarinJS/Karin)](https://github.com/KarinJS/Karin/graphs/contributors)
