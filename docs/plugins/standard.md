# 插件规范

以往，在进行插件开发时，开发者常常将时间浪费在**繁琐**的兼容性、担忧各种问题的处理上。为了解决这些问题，我们制定了一套插件规范，帮助开发者更好的进行插件开发，提高**开发效率**，降低开发难度。

## 基本规范

> [!IMPORTANT] 疑问解答
> 为保证插件开发与使用的安全性、合法性以及社区的健康发展  
> 建议开发者在遵循以下规范的同时，保持对社区精神的尊重与支持

<details>

<summary><b>太长啦，打开看吧qaq</b></summary>

### 1. 免责声明与协议

- **免责声明**：建议开发者在仓库主页明确添加 **免责声明**，以规避潜在责任并为用户提供透明的信息。
- **开源插件**：必须提供符合国际标准的 **开源协议**。
- **闭源插件**：需严格遵守以下规则。

### 2. 禁止行为

开发者必须避免以下任何形式的违法、不当或有害行为：

- **法律与知识产权相关**：
  - 触犯法律法规的行为。
  - 侵犯第三方知识产权的行为。
- **恶意行为**：
  - 恶意推广、恶意宣传等不正当商业行为。
  - 利用插件进行违法犯罪活动。
  - 破坏性行为，包括恶意修改、删除、添加或利用插件进行损害操作。
- **用户隐私与数据安全**：
  - 侵害用户隐私，未经许可收集用户信息。
  - 恶意收集、泄露用户数据或隐私。
- **源代码安全**：
  - 恶意修改、删除或破坏插件源代码。
  - 在插件中嵌入后门、木马、病毒等恶意代码。
- **加密与混淆**：
  - 如插件含有加密或混淆代码，开发者需在仓库主页明确声明涉及的文件及其加密目的。

### 3. 提供开源协议的必要性

开发者需要为开源插件提供明确的开源协议，以下是原因：

1. **明确权利与义务**  
   开源并不等于免费。开源是一种精神，代表对社区的贡献与合作，也保障开发者权益，防止劳动成果被滥用或盗用。
2. **促进纠纷解决**  
   没有明确协议的插件，一旦产生争议，双方往往难以依托法规获得公正解决。开源协议为各方提供了清晰的法律依据。
3. **支持开发者商业化**  
   部分开源协议允许商业使用，开发者可借此实现收益，同时推动生态发展。

### 为什么遵守这些规范？

这些规范的核心在于倡导 **君子协议**，建立信任和合作的基础。通过遵守这些规范，我们可以：

- 一个良好的社区环境
- 增强用户与开发者的信心。
- 推动社区在透明、安全与创新的环境中发展。
- 维护 `karin` 生态的健康与稳定。

</details>

## 命名规范

> [!IMPORTANT] 疑问解答
> 命名规范是插件开发的基础，规范的命名有助于提高代码的可读性和可维护性

### Git 插件包

> **以下规范为强制要求，否则插件将无法被 Karin 识别和启用**

- <mark>插件包名称必须以 `karin-plugin-` 为前缀，紧接其后的部分为插件的具体名称。</mark>
- 必须使用英文命名，尽量保持简洁，避免使用特殊字符。
- 统一采用小写格式，单词之间使用 `-` 连接。
- 托管到 `Github` 或 `Gitee` 时，仓库名称必须与插件包名称一致。
- `package.json` 中的 `name` 字段必须与插件包名称一致。

**示例：**  
`karin-plugin-hello`、`karin-plugin-my-plugin`、`karin-plugin-my-awesome-plugin`

---

### 单个 `.js` 文件

> 以下为推荐规范，但非强制要求。  
> **建议：** 除特殊需求外，不单独创建一个功能重复的 `karin-plugin-example` 文件夹。

- 文件应统一存放于 Karin 提供的 `karin-plugin-example` 文件夹中。
- 命名须使用英文，无需固定前缀。
- 名称应尽量简短，避免过长。
- 避免使用特殊字符，单词之间建议使用 `-` 连接。

**示例：**  
`hello-world.js`、`my-plugin.js`、`my-awesome-plugin.js`

## 多媒体资源规范

> [!IMPORTANT] 疑问解答
> 多媒体资源规范是框架和Bot协议交互过程中最重要的一环  
> 无论是上报的事件，主动请求的数据，都必须遵守这个规范

- 网络资源：
  - 必须携带 `http` 或 `https` 协议
  - 如：`https://www.example.com/image.png`
- 本地资源：
  - 必须携带 `file` 协议
  - 必须使用 `file://` 开头，禁止使用 `file:///` 开头
  - 同一服务器环境跨应用传输，比如使用 `绝对路径`
  - 如：`file://D:/example/image.png` 、`file:///root/image.png`
  - `file:///`前缀容易和`Linux`下的`file:///root`造成混淆，所以不使用
- `base64` :
  - 必须使用 `base64://` 开头
  - 不要携带 `data:image/png;base64,`等前缀
  - 如：`base64://iVBORw0KGAYAAR42mL8//8/AyUYw ...`
- `Buffer`:
  - 此类型在 `karin` 中无法使用，如有需求请转换为 `base64` 或 `file` 协议

## 可配置文件、数据文件规范

## 结构规范

::: tip
目前文档所呈现的规范均为`node-karin@1.0.0+`
:::

### 完整Bot结构

<!-- 推荐使用 https://devtool.tech/tree 生成树状结构 -->

<details>

<summary><b>点击查看树状结构</b></summary>

```md
karin
├── @karinjs
│   ├── config
│   │   ├── config.yaml
│   │   ├── friendDirect.yaml
│   │   ├── groupGuild.yaml
│   │   ├── pm2.yaml
│   │   ├── redis.yaml
│   │   └── server.yaml
│   ├── data
│   │   └── db
│   │       ├── level
│   │       └── redis-level
│   └── karin-plugin-example
│       ├── config
│       ├── data
│       └── resource
├── logs
├── node_modules
├── plugins
│   ├── karin-plugin-example
│   └── karin-plugin-xxx
├── temp
├── index.js
├── package.json
├── package-lock.json
└── pnpm-workspace.yaml

```

</details>

**关心以下重要的文件夹即可：**

- `@karinjs`：存放 `karin`和所有`plugin` 的配置文件、数据文件等
- `plugins`：存放所有的插件包 请将数据文件统一存放到 `@karinjs/<plugin_name>` 下

### `TypeScript`插件包结构

:::tip
以下是`TypeScript`插件包的参考结构`(不含编译产物)`  
具体可根据实际情况进行调整  
请以[karin-plugin-template-ts][ts-template]为模板进行开发
:::

<details>

<summary><b>点击查看树状结构</b></summary>

```md
karin-plugin-test
├── .git
├── .github
├── @karinjs  // 详细config和data请查看上方
│   ├── config
│   ├── data
│   └── karin-plugin-test
│       ├── config
│       ├── data
│       └── resource
├── config
├── logs
├── node_modules
├── resources
├── src
├── temp
├── .gitignore
├── CHANGELOG.md
├── eslint.config.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```

</details>

**温馨提示:**

- 下方的`<plugin_name>`就是指插件包的名称
- 请在发布到npm后，不要将可配置、可修改的文件防止到插件包内，而是放到`@karinjs/<plugin_name>`下
- 请将需要用户配置的 `json` `yaml` 等文件存放到 `@karinjs/<plugin_name>` 下的`config`文件夹下

### 数据文件

::: warning 警告
**这里请必须遵守**
:::

- 对于 `数据文件` ，karin要求开发者将数据文件 `统一` 存放到 `data/` 下
- `karin` 会在启动的时候，为每一个插件包在 `data/` 下创建 `对应名称` 的文件夹
- 如无特殊需求，请不要在 `data` 文件夹下创建其他文件夹

问：为什么要求统一存放数据文件？  
答：方便 `karin` 统一管理，方便用户 `查找`、`迁移` 、快速 `备份` 。

问：什么样的算数据文件？  
答：如 `Cookie` 、`Token` 、`sqlite` 、`mysql` 等数据文件，不包含 `配置文件` 、`资源文件` 。

### 配置文件

> 无需一定遵守，但是推荐遵守

- 对于配置文件，由于使用 `git` 进行管理升级，所以一般会有两种配置文件：`默认配置` 和 `用户配置`
- `Git默认配置` ：要求统一存放在插件自身的 `karin/plugin/<plugin_name>config/` 下，由开发者进行维护修改，此处禁止用户编辑修改。
- `Npm默认配置` ：要求统一存放在插件自身的 `karin/node_modules/<plugin_name>config/` 下，由开发者进行维护修改，此处禁止用户编辑修改。
- `用户配置` ：要求统一存放在 `karin/config/plugin/<plugin_name>` 下，由用户进行编辑修改。
- 如无特殊需求，请不要在 `config` 文件夹下创建其他文件夹

> 对于这里，建议使用 [**`karin-plugin-template`**](#结构规范) 作为模板，进行开发

### 资源文件

> 任选其一即可，以下是两种常见的规范，无需一定遵守

规范1:

- 插件包的资源文件
- 字体文件存放在 `resources/font/` 下
- 图片文件存放在 `resources/image/` 下
- 图标文件存放在 `resources/icon/` 下
- 通用样式文件存放在 `resources/css/` 下
- 渲染模板存放在 `resources/template/` 下，每一种模板新建一个文件夹

规范2:

- 每一种渲染模板都在 `resources` 下新建一个文件夹，文件夹名称为模板名称，将模板的资源文件存放在该文件夹下

### 临时文件

- karin会在启动的时候，在 `karin/temp` 下为每一个插件包创建对应名称的文件夹
- 开发者可在该文件夹下存放临时文件，如缓存文件、日志文件等
- 请勿对他人的文件夹进行删除、修改
- 如无特殊需求，请不要在该文件夹下创建其他文件夹。

### html渲染模板

- karin会在启动的时候，在 `karin/temp/html` 下为每一个插件包创建对应名称的文件夹
- 请开发者在使用渲染的时候，将 `name` 设置为 `插件包名称`

## 仓库规范

- 要求插件仓库名称必须以 `karin-plugin-` 开头，必须与插件包名称一致
- 插件仓库必须提供开源协议
- 在仓库标签页，添加 `karin` 、`karin-plugin`
- 对于二改的 `karin` 仓库，必须进行开源，并使用 `GPLv3+` 协议，并使用 `karin` 标签进行标记

## 多媒体资源规范

- 网络资源：
  - 必须携带 `http` 或 `https` 协议
  - 如：`https://www.example.com/image.png`
- 本地资源：
  - 必须携带 `file` 协议
  - 必须使用 `file://` 开头，禁止使用 `file:///` 开头
  - 同一服务器环境跨应用传输，比如使用 `绝对路径`
  - 如：`file://D:/example/image.png` 、`file:///root/image.png`
- `base64` :
  - 必须使用 `base64://` 开头
  - 不要携带 `data:image/png;base64,`等前缀
  - 如：`base64://iVBORw0KGAYAAR42mL8//8/AyUYw ...`

[ts-template]: https://github.com/KarinJS/karin-plugin-template-ts