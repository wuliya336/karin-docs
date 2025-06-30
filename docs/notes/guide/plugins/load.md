---
title: 插件加载
createTime: 2025/06/30 19:52:28
permalink: /guide/load/
---

# 插件加载机制

本文详细介绍 `karin` 框架如何识别和加载不同类型的插件，帮助开发者正确组织插件结构，确保插件能被系统顺利加载。

## 单个应用插件

> 符合以下条件的插件将被识别为单个应用插件

要点概览：

- 必须使用命名导出（`export const xxx`）导出 `karin.command` 的返回值
- 必须将 JS 文件放置于 `plugins/karin-plugin-xxx` 目录中
- `plugins` 目录下的文件夹必须以 `karin-plugin-` 为前缀才会被系统识别

对于 TypeScript 文件的支持：

- 满足以下条件时，系统可直接加载 `.ts` 文件
  - 通过 `tsx` 启动 `karin`
  - 环境变量 `process.env.RUNTIME=tsx`
  - ~~支持特定 Node.js 版本~~ `(功能开发中)`

### 示例说明

**✅ 正确示例：会被识别为单个应用插件**

```js
// plugins/karin-plugin-example/index.js
import { karin } from 'node-karin'

export const test = karin.command('^(#)?测试$', '让我来展示一下我的功能吧！✨')

// 此示例会被正确识别，因为满足所有要求
```

**❌ 错误示例一：文件夹命名不符合规范**

```js
// plugins/karin-example/index.js
import { karin } from 'node-karin'

export const test = karin.command('^(#)?测试$', '让我来展示一下我的功能吧！✨')

// 此插件不会被识别，因为文件夹名称不是以 karin-plugin- 开头
```

**❌ 错误示例二：没有导出命令**

```js
// plugins/karin-plugin-example/index.js
import { karin } from 'node-karin'

const test = karin.command('^(#)?测试$', '让我来展示一下我的功能吧！✨')

// 此插件不会被识别，因为 karin.command 的返回值没有被正确导出
```

**✅ TypeScript 环境下的正确示例**

```ts
// plugins/karin-plugin-example/index.ts
import { karin } from 'node-karin'

export const test = karin.command('^(#)?测试$', '让我来展示一下我的功能吧！✨')

// 此插件仅在 process.env.RUNTIME 为 tsx 且使用 tsx 启动时才会被加载
```

## 插件包（Git 插件）

单个应用插件的限制使其难以满足复杂插件开发需求。为此，`karin` 提供了插件包机制，更适合开发完整功能集的插件。

识别条件：

- 位于 `plugins` 目录下
- 文件夹名称遵循 `karin-plugin-xxx` 格式
- 根目录包含 `package.json` 文件
- `package.json` 文件中必须包含 `karin` 字段

### 配置示例

```json
// plugins/karin-plugin-pkg/package.json
{
  "name": "karin-plugin-pkg",
  "version": "1.0.0",
  "karin": {
    "apps": [
      "dist/apps" // 指定 JS 文件的相对路径
    ],
    "ts-apps": [  // TypeScript 环境下加载的路径
      "src/apps"
    ]
  }
}
```

配置后，`karin` 将根据环境自动加载指定目录下的所有插件。

::: tip 温馨提示
若需加载 `.ts` 文件，请配置 `karin.ts-apps` 字段。详情请参阅 [package 文档](./package.md)。
:::

## NPM 插件包

除了本地插件，`karin` 同样支持加载发布至 NPM 的插件包。

识别条件：

- 位于 `node_modules` 目录下
- 包含 `package.json` 文件
- `package.json` 中包含 `karin` 字段

## 简化配置

如果你的插件包不需要指定特殊的应用目录，仅需在 `package.json` 中添加空的 `karin` 字段即可：

```json
// package.json
{
  "name": "karin-plugin-pkg",
  "version": "1.0.0",
  "karin": {}
}
```

## 热重载机制

`karin` 提供了便捷的热重载功能，大幅提升开发效率。所有位于 `karin-plugin-example` 目录下的应用插件，无论在何种环境下，修改后均会触发系统自动重载。

### 什么是热重载？

热重载（Hot Module Replacement，HMR）是一种技术，允许在应用运行时更新模块，无需完全刷新或重启应用。在 `karin` 中，当你修改插件代码后，系统能够智能检测并重新加载修改的部分，无需重启整个应用。

### 目录级热重载

在开发环境下（`process.env.NODE_ENV=development`），`karin` 会自动监听配置的 `apps` 或 `ts-apps` 目录（取决于运行环境），当文件发生变化时自动重新加载，让你的开发过程更加流畅高效。
