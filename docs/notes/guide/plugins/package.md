---
title: package.json 配置
createTime: 2025/06/30 20:52:12
---

先看一个 `package.json` 文件

```json
{
  /** 插件名称 */
  "name": "karin-plugin-pkg", 
  /** 插件版本 */
  "version": "1.0.0",
  /** 插件入口 */
  "main": "dist/index.js",
  /** 引擎兼容性 官方的翻译。。。奇奇怪怪的 */
  "engines": {
    /** 
       * 表示本插件需要karin版本规则
       * >=1.8.0
       * @example ^0.0.1
       * @example >=0.0.1
       * @example 0.0.1
       * @example 0.0.x
     */
    "karin": ">=1.8.0"
  },
  "karin": {
    /** ts入口 */
    "main": "src/index.ts",
    /** 插件app列表 */
    "apps": ["dist/apps"],
    /** web配置文件 */
    "web": "dist/web.js",
    /** ts插件app列表 ts专属 仅在ts开发模式下生效 */
    "ts-apps": ["src/apps"],
    /** ts-web */
    "ts-web": "src/web.ts",
    /** 静态资源目录 */
    "static": ["dist/static"],
    /** 基本文件夹结构 */
    "files": ["dist/files"],
    /** 环境变量配置 */
    "env": [
      {
        "name": "NODE_ENV",
        "value": "production"
      }
    ]
  }
}
```

## 配置说明

| 配置项  | 类型                | 必填 | 说明     |
| ------- | ------------------- | ---- | -------- |
| name    | string              | ✅    | 插件名称 |
| version | string              | ✅    | 插件版本 |
| main    | string              |      | 插件入口 |
| engines | [engines](#engines) | ✅    | -        |
| karin   | [karin](#karin)     | ✅    | 插件配置 |

> 关于 `name` 字段，`git` 插件包需要以 `karin-plugin-` 开头，`npm` 包则没有限制

### engines

| 配置项 | 类型   | 必填 | 说明                        |
| ------ | ------ | ---- | --------------------------- |
| karin  | string | ✅    | 表示本插件需要karin版本规则 |

### karin

符合以下要求为 `ts环境`: 
  - `process.env.RUNTIME` 为 `tsx`
  - 通过 `tsx` 启动 `karin`
  - ~~`nodejs vxx` `(待适配)`~~

`js环境` 就是正常使用 `nodejs` 启动 `karin`

**main**:

- 说明: 生产环境插件入口
- 生效环境: `ts`
- 生效字段: `karin.main`
- 类型: `string`
- 示例: `"src/index.ts"`

**apps**:

- 说明: 生成环境 `apps` 入口列表
- 生效环境: `js`
- 生效字段: `karin.apps`
- 类型: `string[]`
- 示例: `["dist/apps"]`

**web**:

- 说明: 生成环境 `webui` 配置
- 生效环境: `js`
- 生效字段: `karin.web`
- 类型: `string`
- 示例: `"dist/web.js"`

**ts-apps**:

- 说明: 开发环境 `apps` 入口列表
- 生效环境: `ts`
- 生效字段: `karin.ts-apps`
- 类型: `string[]`
- 示例: `["src/apps"]`

**ts-web**:

- 说明: 开发环境 `web.config` 入口
- 生效环境: `ts`
- 生效字段: `karin.ts-web`
- 类型: `string`
- 示例: `"src/web.ts"`

**static**:

- 说明: 静态资源目录
- 生效环境: `js` `ts`
- 生效字段: `karin.static`
- 类型: `string[]`
- 示例: `["resource"]`

**files**:

- 说明: 需要在 `@karinjs/<plugin-name>` 文件夹下创建的文件夹列表
- 生效环境: `js` `ts`
- 生效字段: `karin.files`
- 类型: `string[]`
- 示例: `["resource"]`

**env**:

- 说明: 环境变量配置
- 生效环境: `js` `ts`
- 生效字段: `karin.env`
- 类型: `{name: string, value: string}[]`
- 示例: `[{"name": "NODE_ENV", "value": "production"}]`
- 备注: 配置项会自动写入到 `.env`文件，覆盖 `process.env` 中同名变量
