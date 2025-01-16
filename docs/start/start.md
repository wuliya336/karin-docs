# 快速上手

## 环境

环境说明：

::: warning 温馨提示

以下，除了`Node.js`，其他均为可选项，根据实际情况进行安装。
:::

### Node.js <Badge type="danger" text="必须 " />
<br>
<Pill name="Node.js官网" link="https://nodejs.org/zh-cn" />

`Karin`基于`Node.js`开发，在 <Pill name="MIT License" link="../license" /> 下开源<br />
<mark>生产化境推荐使用官方稳定长期支持的`LTS`版本`v20+`</mark>。

- 目前最低要求支持版本为`v18+`，支持版本为`v20+`。
- `Karin`本身并未使用较新的`Node.js`特性，理论来说支持16+版本。
- `Karin`大部分插件开发者的开发环境均在`v20+`版本，推荐使用`v20+`版本。
- 如果无需使用相关插件或功能，可自行选择是否安装`Node.js`的版本。

### Git <Badge type="warning" text="可选 " />

> [!IMPORTANT] 温馨提示
> 下载速度缓慢可以尝试使用国内源：`npmmirror 提供`。

- <Pill name="Git官网" link="https://git-scm.com/" />
- <Pill name="32位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-32-bit.exe" />
- <Pill name="64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-64-bit.exe" />
- <Pill name="ARM64位Git (镜像源)" link="https://registry.npmmirror.com/-/binary/git-for-windows/v2.47.1.windows.1/Git-2.47.1-arm64.exe" />


- `Git`也是一个可选项，所有`Git插件`都可以直接下载压缩包进行安装。
- <mark>正常使用请安装，因为较多插件还是`Git插件`的方式</mark>。

## 部署karin

::: warning 注意
如果你是中国大陆服务器，并且无法访问 `npm` 官方源，这里请务必更换为镜像源。
:::

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

### 安装`pnpm`

::: code-group

```bash [官方源]
npm install pnpm -g
```

```bash [国内源]
npm --registry=https://registry.npmmirror.com install pnpm -g
```

:::

### 安装

先新建一个空白文件夹，以下命令在文件夹里面执行，执行完成不出意外已经启动完毕了~

::: code-group

```bash [通用]
pnpm init && pnpm i node-karin@latest && npx init && npx karin .
```

```powershell [powershell]
pnpm init; pnpm i node-karin@latest; npx init; npx karin .
```

:::

### 基本指令

> [!IMPORTANT] 务必注意
> 文档可能更新不及时，可`npx karin`查看全部指令。  
> 前台启动后需要保持窗口开启，如需关闭请使用`Ctrl+C`。  
> 后台托管后可以关闭窗口，使用`npx karin stop`停止服务。  

::: code-group

```bash [初始化]
npx karin init
```

```bash [JavaScript开发模式]
npx karin dev
```

```bash [TypeScript开发模式]
npx karin ts
```

```bash [指令列表]
npx karin
```

:::

::: code-group

```bash [前台启动]
npx karin .
```

```bash [前台启动]
npx karin start
```

```bash [后台托管]
npx karin pm2
```

```bash [停止托管]
npx karin stop
```

```bash [重启pm2]
npx karin rs
```

```bash [查看pm2日志]
npx karin log
```

:::

## 安装渲染器  <Badge type="warning" text="可选 " />

> [!IMPORTANT] 温馨提示
> 渲染器是用来生成图片的，如果不需要生成图片，可以不安装qaq。  
> 这里只提供快速安装方式，详细安装请查看[渲染器文档](./render.md)  
> 这里不限制任何包管理器，只要能安装即可，因为这是一个独立的项目。

请新建一个文件夹，然后在文件夹内执行以下命令：

::: code-group

```bash [pnpm]
pnpm init && pnpm install @karinjs/puppeteer && npx init && node .
```

```bash [npm]
npm init -y && npm install @karinjs/puppeteer && npx init && node .
```

```bash [yarn]
yarn init -y && yarn add @karinjs/puppeteer && npx init && node .
```

:::

**powershell：**

::: code-group

```bash [pnpm]
pnpm init; pnpm install @karinjs/puppeteer; npx init; node .
```

```bash [npm]
npm init -y; npm install @karinjs/puppeteer; npx init; node .
```

```bash [yarn]
yarn init -y; yarn add @karinjs/puppeteer; npx init; node .
```

:::

## 安装插件

- Github直接搜索`karin-plugin`
- [插件索引](../plugins/index)

**<mark>暂时先这样啦~ 需要开发插件请查看右上角的标签页~</mark>**