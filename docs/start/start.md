# 快速上手

## 1. 环境准备

### Node.js <Badge type="danger" text="必须安装" />

<br>
<Pill name="Node.js官网" link="https://nodejs.org/zh-cn" />

`Karin`基于`Node.js`开发，在 <Pill name="MIT License" link="../license" /> 下开源<br />
<mark>生产化境推荐使用官方稳定长期支持的`LTS`版本`v20+`</mark>。

- 目前最低要求支持版本为`v18+`，支持版本为`v20+`。
- `Karin`本身并未使用较新的`Node.js`特性，理论来说支持 16+版本。
- `Karin`大部分插件开发者的开发环境均在`v20+`版本，推荐使用`v20+`版本。
- 如果无需使用相关插件或功能，可自行选择是否安装`Node.js`的版本。

### Git <Badge type="warning" text="可选 " />

<!-- <details>
<summary>点击展开</summary> -->

::: details 点击展开

> [!IMPORTANT] 温馨提示
> 下载速度缓慢可以尝试使用国内源：`npmmirror 提供`。

- <Pill name="Git官网" link="https://git-scm.com/" />
- <Pill name="32位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-32-bit.exe" />
- <Pill name="64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-64-bit.exe" />
- <Pill name="ARM64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-arm64.exe" />

- `Git`也是一个可选项，所有`Git插件`都可以直接下载压缩包进行安装。
- <mark>正常使用请安装，因为较多插件还是`Git插件`的方式</mark>。

:::

<!-- </details> -->

## 2. 部署 karin

### 全局安装`pnpm`

已安装可跳过至下一步 [安装](#安装)

::: code-group

```bash [官方源]
npm install pnpm -g
```

```bash [国内源]
npm --registry=https://registry.npmmirror.com install pnpm -g
```

:::

### 安装

- 找一个目录执行以下命令`(推荐空白目录)`
- 根据提示选择即可，如果不知道怎么选全部默认即可。
- 使用方向键、回车键即可选择。
- puppeteer 是渲染器，如果不需要生成图片，可以不安装 qaq。

```bash
pnpm create karin
```

::: warning 注意
如果你是中国大陆服务器，并且无法访问 `npm` 官方源，这里请务必更换为镜像源。
:::

::: details 点击展开查看镜像源

- 更换镜像源

::: code-group

```bash [淘宝源]
# 推荐使用 npmmirror 源
npm config set registry https://registry.npmmirror.com
```

```bash [腾讯源]
# 在无法访问 npmmirror 的情况下，可以尝试使用腾讯源
npm config set registry https://mirrors.cloud.tencent.com/npm
```

```bash [官方源]
# 如果你需要恢复为官方源
npm config set registry https://registry.npmjs.org
```

```bash [查询当前源]
# 更换源的步骤为再执行一次即可
npm config get registry
```

:::

### 3. 基本指令

> [!IMPORTANT] 务必注意
> 文档可能更新不及时，可使用 `npx karin` 查看全部指令。  
> 前台启动后需要保持窗口开启，如需关闭请使用 `Ctrl+C`。  
> 后台托管后可以关闭窗口，使用 `npx karin stop` 停止服务。

::: code-group

```bash [初始化]
# 使用上面 `pnpm create karin` 创建的项目无需重复执行!
npx karin init
```

```bash [指令列表]
npx karin
```

:::
常用命令：
::: code-group

```bash [前台启动]
npx karin .
```

```bash [后台运行]
npx karin pm2
```

```bash [停止托管]
npx karin stop
```

```bash [后台重启]
npx karin rs
```

```bash [查看后台启动日志]
npx karin log
```

```bash [更新所有]
npx karin up
```

```bash [查看版本]
npx karin -v
```

:::

### 温馨提示

以上所有命令，如果你不喜欢带每次都要输入`npx`，可以全局安装一个`@karinjs/cli`:

```bash
npm install -g @karinjs/cli
```

安装完成即可使用`karin`命令代替`npx karin`

```bash
karin
karin pm2
```

## 安装插件

- Github 直接搜索`karin-plugin`
- [插件索引](../plugins/index)

**<mark>暂时先这样啦~ 需要开发插件请查看右上角的标签页~</mark>**

## 鸣谢

- `karin` 最开始的版本是基于[Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai)改造而来，感谢所有`Miao-Yunzai`的贡献者~

- 同时，特别感谢[喵喵大佬](https://github.com/yoimiya-kokomi)在许可证一事上对本项目的大力支持！！！

- 由于原项目使用了`GPL3.0`协议，协议的限制较多，深思熟虑后，`karin`决定完全使用`TypeScript`重写、使用`MIT`协议开源。

感谢以下大佬在`karin`开发过程中提供的帮助：

[![贡献者](https://contributors-img.web.app/image?repo=KarinJS/Karin)](https://github.com/KarinJS/Karin/graphs/contributors)
