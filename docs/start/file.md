# 配置文件详解

> [!IMPORTANT]
> 在本节中，我们将详细介绍配置文件的各个配置项。

`@karinjs:`

- 位置: 处于`karin`的根目录下: `karin/@karinjs`
- 描述: 存放插件以及`karin`本身的配置、临时、数据文件等
- 结构: 除了`config` `data` `temp`文件夹外，其余文件夹均属于插件的配置文件夹

- 插件的配置文件夹一般情况会自动生成
  - 插件包名称: 名称来源于`package.json`的`name`字段，并且`karin`会将其中的`/`替换为`-`
  - 位置: `karin/@karinjs/<plugin_name>`

## `config` 目录

- 位置: `karin/@karinjs/config`
- 描述: 存放`karin`的配置文件夹
- 结构:
  - `config.yaml`: `karin`基本配置文件
  - `friendDirect.yaml`: `好友、频道私信` 触发事件相关的配置文件
  - `groupGuild.yaml`: `群、频道` 触发事件相关的配置文件
  - `pm2.yaml`: `pm2`配置文件
  - `redis.yaml`: `redis`配置文件
  - `server.yaml`: `HTTP` `WebSocket` 服务配置文件

### `config.yaml`

> [!IMPORTANT] 温馨提示
> `karin`基本配置文件

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

> [!IMPORTANT] 注意
> 对于黑白名单配置，是可以同时存在的，并且黑名单的优先级更高  
> 例如: 如果一个用户同时处于黑白名单中，那么他将被视为黑名单用户
> 黑白名单相关的配置项，都是数组类型，如果配置空数组则表示未设置

| 配置项                 | 类型       | 描述                                                                                |
| ---------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `log4jsCfg.level`      | `string`   | 日志等级: trace, debug, info, warn, fatal, mark, error, off                         |
| `log4jsCfg.daysToKeep` | `number`   | 日志保留天数                                                                        |
| `log4jsCfg.overall`    | `boolean`  | 整体化: 将日志输出到一个文件(一天为一个文件) 日志较多的情况下不建议与碎片化同时开启 |
| `log4jsCfg.fragments`  | `boolean`  | 碎片化: 将日志分片，达到指定大小后自动切割 日志较多的情况下不建议与整体化同时开启   |
| `log4jsCfg.maxLogSize` | `number`   | 日志文件最大大小 MB                                                                 |
| `log4jsCfg.logColor`   | `string`   | logger.fnc颜色 不支持热更新 默认`"#E1D919"`                                         |
| `pm2Restart`           | `boolean`  | 重启是否调用pm2 如果不调用则会直接关机 此配置适合有进程守护的程序                   |
| `private.enable`       | `boolean`  | 是否启用私聊                                                                        |
| `private.tips`         | `string`   | 关闭私聊后回复的提示词 为空则不回复                                                 |
| `private.disable`      | `string[]` | 关闭私聊后的用户白名单                                                              |
| `ffmpegPath`           | `string`   | ffmpeg绝对路径 用于音视频处理 `(如果存在全局变量无需配置此处)`                      |
| `ffprobePath`          | `string`   | ffprobe绝对路径 用于音视频处理 `(如果存在全局变量无需配置此处)`                     |
| `ffplayPath`           | `string`   | ffplay绝对路径 用于音视频处理 `(如果存在全局变量无需配置此处)`                      |
| `master`               | `string[]` | Bot主人列表 主权限                                                                  |
| `admin`                | `string[]` | Bot管理列表 子权限                                                                  |
| `disable.users`        | `string[]` | 黑名单用户                                                                          |
| `disable.groups`       | `string[]` | 黑名单群聊                                                                          |
| `disable.guilds`       | `string[]` | 黑名单频道                                                                          |
| `disable.channels`     | `string[]` | 黑名单子频道                                                                        |
| `disable.directs`      | `string[]` | 黑名单频道私聊 禁用指定来源频道的私聊                                               |
| `disable.groupLog`     | `string[]` | 消息日志黑名单群聊 设置后不会打印指定群的消息日志                                   |
| `disable.guildLog`     | `string[]` | 消息日志黑名单频道 设置后不会打印指定频道的消息日志                                 |
| `disable.channelLog`   | `string[]` | 消息日志黑名单子频道 设置后不会打印指定子频道的消息日志                             |
| `enable.users`         | `string[]` | 白名单用户 `(不包含黑名单)`                                                         |
| `enable.groups`        | `string[]` | 白名单群聊 `(不包含黑名单)`                                                         |
| `enable.guilds`        | `string[]` | 白名单频道 `(不包含黑名单)`                                                         |
| `enable.channels`      | `string[]` | 白名单子频道 `(不包含黑名单)`                                                       |
| `enable.directs`       | `string[]` | 白名单频道私聊 仅允许指定来源频道的私聊 `(不包含黑名单)`                            |
| `enable.groupLog`      | `string[]` | 消息日志白名单群聊 设置后只会打印指定群的消息日志 `(不包含黑名单)`                  |
| `enable.guildLog`      | `string[]` | 消息日志白名单频道 设置后只会打印指定频道的消息日志 `(不包含黑名单)`                |
| `enable.channelLog`    | `string[]` | 消息日志白名单子频道 设置后只会打印指定子频道的消息日志 `(不包含黑名单)`            |

</details>

<!-- 点击展开默认配置 -->
<details>
<summary>点击展开默认配置</summary>

```yaml
# 详细配置请参考: https://karin.fun/start/file

# log4js 日志配置
log4jsCfg:
  # 日志等级: trace, debug, info, warn, fatal, mark, error, off
  level: trace
  # 日志保留天数
  daysToKeep: 7
  # 整体化: 将日志输出到一个文件(一天为一个文件) 日志较多的情况下不建议与碎片化同时开启
  overall: true
  # 碎片化: 将日志分片，达到指定大小后自动切割 日志较多的情况下不建议与整体化同时开启
  fragments: false
  # 日志文件最大大小 MB
  maxLogSize: 30
  # logger.fnc颜色 不支持热更新
  logColor: "#E1D919"

# 重启是否调用pm2 如果不调用则会直接关机 此配置适合有进程守护的程序
pm2Restart: true

# 私聊设置 频道和好友共享此配置
private:
  # 是否启用私聊
  enable: true
  # 关闭私聊后回复的提示词 为空则不回复
  tips: ""
  # 关闭私聊后的用户白名单
  disable: []

# ffmpeg配置 用于音视频处理
ffmpegPath:
ffprobePath:
ffplayPath:

# Bot主人列表 主权限
master:
  - input

# Bot管理列表 子权限
admin: []

# 黑名单相关
disable:
  # 黑名单用户
  users: []
  # 黑名单群聊
  groups: []
  # 黑名单频道
  guilds: []
  # 黑名单子频道
  channels: []
  # 黑名单频道私聊 禁用指定来源频道的私聊
  directs: []
  # 消息日志黑名单群聊 设置后不会打印指定群的消息日志
  groupLog: []
  # 消息日志黑名单频道 设置后不会打印指定频道的消息日志
  guildLog: []
  # 消息日志黑名单子频道 设置后不会打印指定子频道的消息日志
  channelLog: []

# 白名单相关
enable:
  # 白名单用户
  users: []
  # 白名单群聊
  groups: []
  # 白名单频道
  guilds: []
  # 白名单子频道
  channels: []
  # 白名单频道私聊 仅允许指定来源频道的私聊
  directs: []
  # 消息日志白名单群聊 设置后只会打印指定群的消息日志
  groupLog: []
  # 消息日志白名单频道 设置后只会打印指定频道的消息日志
  guildLog: []
  # 消息日志白名单子频道 设置后只会打印指定子频道的消息日志
  channelLog: []

```

</details>

<!-- 点击展开示例配置 -->

<details>
<summary>点击展开示例配置</summary>

```yaml
# log4js 日志配置
log4jsCfg:
  # 日志等级: trace, debug, info, warn, fatal, mark, error, off
  level: info
  # 日志保留天数
  daysToKeep: 7
  # 整体化: 将日志输出到一个文件(一天为一个文件) 日志较多的情况下不建议与碎片化同时开启
  overall: true
  # 碎片化: 将日志分片，达到指定大小后自动切割 日志较多的情况下不建议与整体化同时开启
  fragments: false
  # 日志文件最大大小 MB
  maxLogSize: 30
  # logger.fnc颜色 不支持热更新
  logColor: "#E1D919"

# 重启是否调用pm2 如果不调用则会直接关机 此配置适合有进程守护的程序
pm2Restart: true

# 私聊设置 频道和好友共享此配置
private:
  # 是否启用私聊
  enable: true
  # 关闭私聊后回复的提示词 为空则不回复
  tips: 私聊已关闭，请联系管理员处理
  # 关闭私聊后的用户白名单
  disable: 
    - '123456789'

# ffmpeg配置 用于音视频处理
ffmpegPath: '/usr/bin/ffmpeg'
ffprobePath: '/usr/bin/ffprobe'
ffplayPath: '/usr/bin/ffplay'

# Bot主人列表 主权限
master:
  - input

# Bot管理列表 子权限
admin: 
    - '123456789'

# 黑名单相关
disable:
  # 黑名单用户
  users: 
    - '123456789'
    - '987654321'
  # 黑名单群聊
  groups: 
    - '123456789'
    - '987654321'
  # 黑名单频道
  guilds: 
    - '123456789'
    - '987654321'
  # 黑名单子频道
  channels: 
    - '123456789'
    - '987654321'
  # 黑名单频道私聊 禁用指定来源频道的私聊
  directs: 
    - '123456789'
    - '987654321'
  # 消息日志黑名单群聊 设置后不会打印指定群的消息日志
  groupLog: 
    - '123456789'
    - '987654321'
  # 消息日志黑名单频道 设置后不会打印指定频道的消息日志
  guildLog: 
    - '123456789'
    - '987654321'
  # 消息日志黑名单子频道 设置后不会打印指定子频道的消息日志
  channelLog: 
    - '123456789'
    - '987654321'

# 白名单相关
enable:
  # 白名单用户
  users: 
    - '123456789'
    - '987654321'
  # 白名单群聊
  groups: 
    - '123456789'
    - '987654321'
  # 白名单频道
  guilds: 
    - '123456789'
    - '987654321'
  # 白名单子频道
  channels: 
    - '123456789'
    - '987654321'
  # 白名单频道私聊 仅允许指定来源频道的私聊
  directs: 
    - '123456789'
    - '987654321'
  # 消息日志白名单群聊 设置后只会打印指定群的消息日志
  groupLog: 
    - '123456789'
    - '987654321'
  # 消息日志白名单频道 设置后只会打印指定频道的消息日志
  guildLog: 
    - '123456789'
    - '987654321'
  # 消息日志白名单子频道 设置后只会打印指定子频道的消息日志
  channelLog: 
    - '123456789'
    - '987654321'

```

</details>

### `friendDirect.yaml`

> [!IMPORTANT] 温馨提示
> `好友` `频道私信` 触发事件相关的配置文件

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

> [!IMPORTANT] 注意
> 对于黑白名单配置，是可以同时存在的，并且黑名单的优先级更高  
> 

| 配置项                  | 类型       | 描述                                                                                                                                    |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `default`               | `-`        | 全局配置，自定义配置中缺少的会从全局配置结构合并                                                                                        |
| `default.cd`            | `number`   | 好友消息冷却时间，单位秒,0则无限制                                                                                                      |
| `default.mode`          | `number`   | 机器人响应模式(私聊没有群聊那么多模式) <br> `0-所有` `2-仅回应管理员` `3-仅回应别名` <br> `5-管理员无限制，非管理员别名` `6-仅回应主人` |
| `default.alias`         | `string[]` | 机器人别名 设置后别名+指令触发机器人                                                                                                    |
| `default.enable`        | `string[]` | 白名单插件、功能，只有在白名单中的插件、功能才会响应 <br> `<插件名称>` `<插件名称>:<插件文件后缀名称\|插件方法名称>`                    |
| `default.disable`       | `string[]` | 黑名单插件、功能，黑名单中的插件、功能不会响应 <br> `<插件名称>` `<插件名称>:<插件文件后缀名称\|插件方法名称>`                          |
| `Bot:<selfId>`          | `-`        | 单个Bot自定义配置                                                                                                                       |
| `Bot:<selfId>.<userId>` | `-`        | 单个Bot中的单个好友、频道成员自定义配置                                                                                                 |

</details>

<!-- 点击展开默认配置 -->

<details>

<summary>点击展开默认配置</summary>

```yaml
# 详细配置请参考: https://karin.fun/start/file

# 全局默认配置
default:
  # 好友消息冷却时间，单位秒,0则无限制
  cd: 0
  # 机器人响应模式(私聊没有群聊那么多模式)，0-所有 2-仅回应管理员 3-仅回应别名 5-管理员无限制，非管理员别名 6-仅回应主人
  mode: 0
  # 机器人别名 设置后别名+指令触发机器人
  alias:
    - k
  # 白名单插件、功能，只有在白名单中的插件、功能才会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  enable: []
  # 黑名单插件、功能，黑名单中的插件、功能不会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  disable: []

# 单个Bot默认配置
Bot:selfId:
  cd: 0
  mode: 0
  alias: []
  enable: []
  disable: []

# 单个Bot:单个好友、频道成员 配置
Bot:selfId:userId:
  cd: 0
  mode: 0
  alias: []
  enable: []
  disable: []
```

</details>

<!-- 点击展开示例配置 -->

<details>

<summary>点击展开示例配置</summary>

> [!IMPORTANT] 注意
> 对于黑白名单配置，是可以同时存在的，并且黑名单的优先级更高
> 对于单独配置中缺失的配置项，将会从全局默认配置中继承合并形成最终配置

```yaml
# 全局默认配置
default:
  # 好友消息冷却时间，单位秒,0则无限制
  cd: 1
  # 机器人响应模式(私聊没有群聊那么多模式)，0-所有 2-仅回应管理员 3-仅回应别名 5-管理员无限制，非管理员别名 6-仅回应主人
  mode: 0
  # 机器人别名 设置后别名+指令触发机器人
  alias:
    - k # 可通过 k<指令> 触发
  # 白名单插件、功能，只有在白名单中的插件、功能才会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  enable: 
    - 'karin-plugin-test' # 仅影响`karin-plugin-test`插件
    - 'karin-plugin-test:app.js'  # 仅影响`karin-plugin-test`插件的`app.js`这个文件
    - 'karin-plugin-test:测试转发' # 仅影响`karin-plugin-test`插件的`测试转发`功能
  # 黑名单插件、功能，黑名单中的插件、功能不会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  disable:
    - 'karin-plugin-demo' # 禁用`karin-plugin-demo`插件
    - 'karin-plugin-demo:app.js' # 禁用`karin-plugin-demo`插件的`app.js`这个文件
    - 'karin-plugin-demo:测试转发' # 禁用`karin-plugin-demo`插件的`测试转发`功能

# 单个Bot默认配置
# 在Bot为123456的情况下将优先使用该配置
Bot:123456789:
  cd: 0
  mode: 1

# 单个Bot:单个好友、频道成员 配置
# 在Bot为123456789的情况下，触发者为987654321的情况下将优先使用该配置
Bot:123456789:987654321:
  alias: 
    - t
```

</details>

### `groupGuild.yaml`

> [!IMPORTANT] 温馨提示
> `群、频道` 触发事件相关的配置文件

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

> [!IMPORTANT] 注意
> 对于黑白名单配置，是可以同时存在的，并且黑名单的优先级更高

| 配置项                               | 类型       | 描述                                                                                                                                                      |
| ------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`                            | `-`        | 全局配置，自定义配置中缺少的会从全局配置结构合并                                                                                                          |
| `default.cd`                         | `number`   | 群聊、频道中所有消息冷却时间，单位秒,0则无限制                                                                                                            |
| `default.userCD`                     | `number`   | 群聊、频道中 每个人的消息冷却时间，单位秒,0则无限制。注意，开启后所有消息都会进CD，无论是否触发插件。                                                     |
| `default.mode`                       | `number`   | 机器人响应模式 <br> `0-所有` `1-仅@机器人` `2-仅回应管理员` <br> `3-仅回应别名` `4-别名或@机器人` <br> `5-管理员无限制，成员别名或@机器人` `6-仅回应主人` |
| `default.alias`                      | `string[]` | 机器人别名 设置后别名+指令触发机器人                                                                                                                      |
| `default.enable`                     | `string[]` | 白名单插件、功能，只有在白名单中的插件、功能才会响应 <br> `<插件名称>` `<插件名称>:<插件文件后缀名称\|插件方法名称>`                                      |
| `default.disable`                    | `string[]` | 黑名单插件、功能，黑名单中的插件、功能不会响应 <br> `<插件名称>` `<插件名称>:<插件文件后缀名称\|插件方法名称>`                                            |
| `default.memberDisable`              | `string[]` | 群、频道成员单独黑名单                                                                                                                                    |
| `default.memberEnable`               | `string[]` | 群、频道成员单独白名单                                                                                                                                    |
| `Bot:<selfId>`                       | `-`        | 单个Bot自定义配置                                                                                                                                         |
| `Bot:<selfId>:<groupId>`             | `-`        | 单个Bot中的单个群、频道自定义配置                                                                                                                         |
| `Bot:<selfId>:<guildId>`             | `-`        | 单个Bot中的单个频道自定义配置                                                                                                                             |
| `Bot:<selfId>:<guildId>:<channelId>` | `-`        | 单个Bot中的单个频道的单个子频道自定义配置                                                                                                                 |

</details>

<!-- 点击展开默认配置 -->

<details>
<summary>点击展开默认配置</summary>

```yaml
# 详细配置请参考: https://karin.fun/start/file

# 全局默认配置
default:
  # 群聊、频道中所有消息冷却时间，单位秒，0则无限制
  cd: 0
  # 群聊、频道中 每个人的消息冷却时间，单位秒，0则无限制。注意，开启后所有消息都会进CD，无论是否触发插件。
  userCD: 1
  # 机器人响应模式，0-所有 1-仅@机器人 2-仅回应管理员 3-仅回应别名 4-别名或@机器人 5-管理员无限制，成员别名或@机器人 6-仅回应主人
  mode: 0

  # 机器人别名 设置后别名+指令触发机器人
  alias:
    - k

  # 白名单插件、功能，只有在白名单中的插件、功能才会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  enable: []

  # 黑名单插件、功能，黑名单中的插件、功能不会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  disable: []

  # 群、频道成员单独黑名单
  memberDisable: []

  # 群、频道成员单独白名单
  memberEnable: []

# 单个Bot全局配置
Bot:selfId:
  cd: 0
  userCD: 1
  mode: 0
  alias: []
  enable: []
  disable: []
  memberDisable: []
  memberEnable: []

# 单个Bot:单个群 配置
Bot:selfId:groupId:
  cd: 0
  userCD: 1
  mode: 0
  alias: []
  enable: []
  disable: []
  memberDisable: []
  memberEnable: []

# 单个Bot:单个频道 配置
Bot:selfId:guildId:
  cd: 0
  userCD: 1
  mode: 0
  alias: []
  enable: []
  disable: []
  memberDisable: []
  memberEnable: []

# 单个Bot:单个频道:单个子频道 配置
Bot:selfId:guildId:channelId:
  cd: 0
  userCD: 1
  mode: 0
  alias: []
  enable: []
  disable: []
  memberDisable: []
  memberEnable: []
```

</details>

<!-- 点击展开示例配置 -->

<details>
<summary>点击展开示例配置</summary>

> [!IMPORTANT] 注意
> 对于单独配置中缺失的配置项，将会从全局默认配置中继承合并形成最终配置

```yaml
# 全局默认配置
default:
  # 群聊、频道中所有消息冷却时间，单位秒，0则无限制
  cd: 1
  # 群聊、频道中 每个人的消息冷却时间，单位秒，0则无限制。注意，开启后所有消息都会进CD，无论是否触发插件。
  userCD: 1
  # 机器人响应模式，0-所有 1-仅@机器人 2-仅回应管理员 3-仅回应别名 4-别名或@机器人 5-管理员无限制，成员别名或@机器人 6-仅回应主人
  mode: 0

  # 机器人别名 设置后别名+指令触发机器人
  alias:
    - k

  # 白名单插件、功能，只有在白名单中的插件、功能才会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  enable: 
    - 'karin-plugin-test' # 仅影响`karin-plugin-test`插件
    - 'karin-plugin-test:app.js'  # 仅影响`karin-plugin-test`插件的`app.js`这个文件
    - 'karin-plugin-test:测试转发' # 仅影响`karin-plugin-test`插件的`测试转发`功能
  # 黑名单插件、功能，黑名单中的插件、功能不会响应 `karin-plugin-test:app.js` `karin-plugin-test:测试转发`
  disable:
    - 'karin-plugin-demo' # 禁用`karin-plugin-demo`插件
    - 'karin-plugin-demo:app.js' # 禁用`karin-plugin-demo`插件的`app.js`这个文件
    - 'karin-plugin-demo:测试转发' # 禁用`karin-plugin-demo`插件的`测试转发`功能

  # 群、频道成员单独黑名单
  memberDisable: 
    - '123456789'
    - '987654321'
  
  # 群、频道成员单独白名单
  memberEnable: 
    - '123456789'
    - '987654321'

# 单个Bot全局配置
# 在Bot为100的情况下将优先使用该配置
Bot:100:
  cd: 0
  userCD: 1
  mode: 1

# 单个Bot:单个群 配置
# 在Bot为100 群为abc的情况下将优先使用该配置
Bot:100:520:
  cd: 0
  userCD: 1
  mode: 1

# 单个Bot:单个频道 配置
# 在Bot为100 频道为abc的情况下将优先使用该配置
Bot:100:abc:
  cd: 0
  userCD: 1
  mode: 1

# 单个Bot:单个频道:单个子频道 配置
# 在Bot为100 频道为abc 子频道为666的情况下将优先使用该配置
Bot:100:abc:666:
  cd: 0
  userCD: 1
  mode: 1
```

</details>

### `pm2.yaml`

> [!IMPORTANT] 温馨提示
> `pm2`配置项
> `pm2`配置不提供示例配置

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

| 配置项                    | 类型       | 描述             |
| ------------------------- | ---------- | ---------------- |
| `lines`                   | `number`   | 日志最多显示行数 |
| `apps`                    | `object[]` | `pm2`配置数组    |
| `apps.name`               | `string`   | `pm2`应用名称    |
| `apps.script`             | `string`   | 入口文件         |
| `apps.autorestart`        | `boolean`  | 自动重启         |
| `apps.max_restarts`       | `number`   | 重启次数         |
| `apps.max_memory_restart` | `string`   | 最大重启内存     |
| `apps.restart_delay`      | `number`   | 重启延迟         |
| `apps.merge_logs`         | `boolean`  | 合并日志         |
| `apps.error_file`         | `string`   | 错误日志         |
| `apps.out_file`           | `string`   | 输出日志         |

</details>

<!-- 点击展开默认配置 -->

<details>
<summary>点击展开默认配置</summary>

```yaml
# 日志最多显示1000行
lines: 1000

apps:
  - name: karin
    # 入口文件
    script: index.js
    # 自动重启
    autorestart: true
    # 重启次数
    max_restarts: 60
    # 最大重启次数
    max_memory_restart: 1G
    # 重启延迟
    restart_delay: 2000
    # 合并日志
    merge_logs: true
    # 错误日志
    error_file: ./logs/pm2_error.log
    # 输出日志
    out_file: ./logs/pm2_out.log
```

</details>

### `redis.yaml`

> [!IMPORTANT] 温馨提示
> `redis`配置项  
> `redis`配置不提供示例配置

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

| 配置项        | 类型     | 描述                               |
| ------------- | -------- | ---------------------------------- |
| `url`         | `string` | Redis连接URL，优先级高于其他配置项 |
| `socket`      | `object` | 套接字连接属性                     |
| `socket.host` | `string` | Redis服务器地址                    |
| `socket.port` | `number` | Redis服务器端口                    |
| `username`    | `string` | Redis用户名                        |
| `password`    | `string` | Redis密码                          |
| `database`    | `number` | Redis数据库索引                    |

</details>

<!-- 点击展开默认配置 -->

<details>
<summary>点击展开默认配置</summary>

```yaml
# 这里的所有配置会全部传递给redis 详情参数请查阅

# url的优先级是高于下方配置的，如果url没有的参数会读取最下方配置
# redis[s]://[[username][:password]@][host][:port][/db-number]
url: redis://127.0.0.1:6379

# 套接字连接属性
socket:
    # 地址
    host: 127.0.0.1
    # 端口
    port: 6379

# 用户名
username:
# 密码
password:
# 数据库索引
database: 0
```

</details>

### `server.yaml`

> [!IMPORTANT] 温馨提示
> `HTTP` `WebSocket` 服务配置文件

<!-- 点击展开配置详细说明 -->

<details>
<summary>点击展开配置详细说明</summary>

| 配置项           | 类型                                             | 描述                                                      |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------- |
| `hmrToServer`    | `boolean`                                        | 当前文件热更新是否重启http服务                            |
| `host`           | `string`                                         | http监听地址                                              |
| `port`           | `number`                                         | http端口                                                  |
| `timeout`        | `number`                                         | ws api请求超时时间 秒                                     |
| `reverseWsToken` | `string`                                         | 反向ws鉴权秘钥                                            |
| `onebotHttp`     | `{url: string, selfId: string, token: string}[]` | `onebot` http api 上报地址 `(详细配置请查看下方的示例)`   |
| `forwardWs`      | `{url: string, token: string}[]`                 | `onebot11` 正向WebSocket地址 `(详细配置请查看下方的示例)` |
| `renderWs`       | `{url: string, token: string}[]`                 | `websocket` 渲染器地址 `(详细配置请查看下方的示例)`       |
| `renderHttp`     | `{url: string, token: string}[]`                 | http渲染器地址 `(详细配置请查看下方的示例)`               |
| `rootMsg`        | `string[]`                                       | http `ping` api 随机返回的文案                            |

</details>

<!-- 点击展开默认配置 -->

<details>
<summary>点击展开默认配置</summary>

```yaml
# 当前文件热更新是否重启http服务
hmrToServer: false

# http监听地址
host: 0.0.0.0

# http端口
port: 7000

# ws api请求超时时间 秒
timeout: 60

# onebot http
onebotHttp:
    - selfId: default
      api: http://127.0.0.1:7777
      # 强烈建议配置 防止恶意伪造事件上报
      token: ""

# 反向ws鉴权秘钥
reverseWsToken: ""
# onebot11 正向WebSocket地址
forwardWs: []

# websocket 渲染器地址 ws://127.0.0.1:7005/ws/render
renderWs: []
# http渲染器地址
renderHttp: []

# http根路由随机返回的文案
rootMsg:
    - 雪霁银妆素，桔高映琼枝。
    - 若知是梦何须醒，不比真如一相会。
    - 一片春愁待酒浇，江上舟摇，楼上帘招。
    - 人生自是有情痴，此恨不关风与月。
```

</details>

<!-- 点击展开示例配置 -->

<details>
<summary>点击展开示例配置</summary>

```yaml
# 当前文件热更新是否重启http服务
hmrToServer: false

# http监听地址
host: 0.0.0.0

# http端口
port: 7000

# ws api请求超时时间 秒
timeout: 60

# onebot http
onebotHttp:
    # 如果是default则会跳过
    - selfId: default
      api: http://127.0.0.1:7777
      # 强烈建议配置 防止恶意伪造事件上报
      token: "123456"
    - selfId: 123
      api: http://localhost:7777
      token: "123456"

# 反向ws鉴权秘钥
reverseWsToken: "123456"
# onebot11 正向WebSocket地址
forwardWs: 
  - url: ws://127.0.0.1:7000
    token: '123456'
  - url: ws://localhost:700
    token: '123456'

# websocket 渲染器地址 ws://127.0.0.1:7005/ws/render
renderWs: 
  - url: ws://127.0.0.1:7000
    token: '123456'
  - url: ws://localhost:700
    token: '123456'

# http渲染器地址
renderHttp: 
  - url: http://127.0.0.1:7005/render
    token: '123456'
  - url: http://localhost:700/render
    token: '123456'

# http根路由随机返回的文案
rootMsg:
    - 雪霁银妆素，桔高映琼枝。
    - 若知是梦何须醒，不比真如一相会。
    - 一片春愁待酒浇，江上舟摇，楼上帘招。
    - 人生自是有情痴，此恨不关风与月。
```

</details>

## `data` 目录

- 位置: `karin/@karinjs/data`
- 描述: `data`目录用于存放一些数据文件，如`sqlite`数据库文件等
- 结构:
  - `db/level`: 存放`level`数据库文件
  - `db/redis-level`: 存放伪造的`redis`持久化数据文件
  - 其余文件夹: 均属于插件数据文件夹
  
## `temp` 目录

- 位置: `karin/@karinjs/temp`
- 描述: `temp`目录用于存放一些临时文件，如`ffmpeg`临时文件等
- 结构:
  - html: 存放模板渲染后的`html`文件
  - 其余文件夹: 均属于插件临时文件夹
