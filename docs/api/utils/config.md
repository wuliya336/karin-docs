# config 模块

config模块提供了配置文件的初始化、读取和缓存功能，用于管理框架和插件的配置。

## 配置初始化

### initConfig

初始化框架所需的目录结构和配置文件。

> [!note] 温馨提示
> `initConfig` 函数是内部函数，通常由框架自动调用。

```typescript
import { initConfig } from 'node-karin'

/**
 * 初始化配置
 * @param dir 根目录对象，通常直接使用框架的root模块
 */
await initConfig(root)
```

此函数会：
1. 创建必要的目录结构
2. 设置版本信息
3. 检查环境变量
4. 生成默认配置文件
5. 初始化配置缓存

## 配置工具函数

### formatArray

将数组中的所有元素转换为字符串类型。

```typescript
import { formatArray } from 'node-karin'

/**
 * 将数组中所有元素转换为字符串
 * @param data 源数组
 * @returns 元素都为字符串的数组
 */
const numbers = [1, 2, 3]
const strings = formatArray(numbers) // ['1', '2', '3']
```

### formatObject

递归处理对象，将嵌套的数组中所有元素转换为字符串类型。

```typescript
import { formatObject } from 'node-karin'

/**
 * 将对象中嵌套数组的所有元素转换为字符串
 * @param data 源对象
 * @returns 处理后的对象
 */
const obj = {
  ids: [1, 2, 3],
  nested: {
    values: [4, 5, 6]
  }
}

const formatted = formatObject(obj)
// 结果:
// {
//   ids: ['1', '2', '3'],
//   nested: {
//     values: ['4', '5', '6']
//   }
// }
```

### mergeDegAndCfg

合并默认配置和用户配置，专用于处理privates和groups配置。

```typescript
import { mergeDegAndCfg } from 'node-karin'

/**
 * 合并配置对象
 * @param def 默认配置
 * @param cfg 用户配置
 * @returns 合并后的配置
 */
const defaultConfig = {
  maxConnections: 10,
  timeout: 30000,
  allowedTypes: ['image', 'video']
}

const userConfig = {
  timeout: 60000,
  allowedTypes: ['image', 'audio']
}

const merged = mergeDegAndCfg(defaultConfig, userConfig)
// 结果:
// {
//   maxConnections: 10,
//   timeout: 60000,
//   allowedTypes: ['image', 'audio']
// }
```

## 配置缓存

config模块提供了配置缓存机制，用于提高频繁访问配置的性能。

### createCount

创建配置访问计数对象，用于跟踪配置项的访问频率。

```typescript
import { createCount } from 'node-karin'

/**
 * 创建缓存计数对象
 * @returns 缓存计数对象
 */
const countObj = createCount()
```

### getCacheCfg

获取缓存的配置项，优先使用访问频率高的键路径。

```typescript
import { getCacheCfg } from 'node-karin'

/**
 * 获取缓存配置
 * @param cache 缓存对象
 * @param count 计数对象
 * @param keys 键路径数组
 * @returns 配置值
 */
const cache = {
  'user.123': { name: 'User 123', roles: ['admin'] },
  'user.456': { name: 'User 456', roles: ['user'] },
  'default': { name: 'Default User', roles: [] }
}

const count = createCount()
const config = getCacheCfg(cache, count, ['user.123', 'user.456'])
```

### clearCache

定期清理低频访问的配置缓存项。

```typescript
import { clearCache } from 'node-karin'

/**
 * 定时清理缓存
 * @param count 计数对象
 * @param cache 缓存对象
 */
clearCache(countObj, cacheObj)
```

## 管理员配置 (admin)

处理框架层面的管理员配置操作。

### getYaml

获取指定配置文件的内容。

```typescript
import { getYaml } from 'node-karin'

/**
 * 获取配置YAML
 * @param name 文件名称
 * @param type 文件类型，用户配置/默认配置
 * @param isRefresh 是否刷新缓存
 * @returns 配置对象
 */
const groups = getYaml('groups', 'user')
const defaultGroups = getYaml('groups', 'default')
```

### setYaml / setConfig

修改框架配置文件。

```typescript
import { setYaml, setConfig } from 'node-karin'

/**
 * 修改框架配置
 * @param name 文件名称
 * @param data 配置数据
 * @returns 是否修改成功
 */
// 两个函数功能相同
const success = setYaml('groups', { /* 配置内容 */ })
const success2 = setConfig('privates', { /* 配置内容 */ })
```

### clearFiles

清空指定目录下的所有文件，但不删除目录本身。

```typescript
import { clearFiles } from 'node-karin'

/**
 * 清空指定目录下的全部文件
 * @param dir 目录路径
 */
clearFiles('/path/to/directory')
```

### updateLevel

更新日志等级。

```typescript
import { updateLevel } from 'node-karin'

/**
 * 更新日志等级
 * @param level 日志等级
 * @returns 更新后的日志等级
 */
// 指定新的日志等级
const newLevel = updateLevel('debug')

// 从环境变量中读取日志等级
const currentLevel = updateLevel()
```

## 包信息配置 (pkg)

提供node-karin包的相关信息。

### pkg

获取node-karin的package.json信息。

```typescript
import { pkg } from 'node-karin'

/**
 * 获取node-karin的package.json
 * @returns package.json内容
 */
const packageInfo = pkg()
console.log(`当前版本: ${packageInfo.version}`)
```

## 环境变量配置 (env)

读取和修改环境变量配置。

### env

获取完整的环境变量配置。

```typescript
import { env } from 'node-karin'

/**
 * 获取完整环境变量配置
 * @returns 环境变量对象
 */
const envConfig = env()
console.log(`HTTP端口: ${envConfig.HTTP_PORT}`)
```

### getEnv

获取.env文件内容，包含注释信息。

```typescript
import { getEnv } from 'node-karin'

/**
 * 获取.env文件内容
 * @param filePath 可选的环境变量文件路径
 * @returns 环境变量对象，包含值和注释
 */
const envWithComments = getEnv()
// 结果:
// {
//   'HTTP_PORT': { value: '7777', comment: '# HTTP服务端口' },
//   'LOG_LEVEL': { value: 'info', comment: '# 日志级别' }
// }
```

### setEnv

修改单个环境变量。

```typescript
import { setEnv } from 'node-karin'

/**
 * 修改.env文件
 * @param data 需要更新的环境变量键值对
 * @returns 是否更新成功
 */
const success = setEnv({ 
  HTTP_PORT: 8080,
  LOG_LEVEL: 'debug'
})
```

### writeEnv

写入单个或多个环境变量，支持添加注释。

```typescript
import { writeEnv } from 'node-karin'

/**
 * 写入环境变量
 * @param data 要写入的环境变量数组或单个对象
 * @param cwd 可选的环境变量文件路径
 * @param isCover 是否覆盖已有的值
 */
// 写入单个变量
writeEnv({
  key: 'HTTP_PORT',
  value: '8080',
  comment: '# HTTP服务端口'
})

// 写入多个变量
writeEnv([
  {
    key: 'HTTP_PORT',
    value: '8080',
    comment: '# HTTP服务端口'
  },
  {
    key: 'LOG_LEVEL',
    value: 'debug',
    comment: '# 日志级别'
  }
], undefined, true) // true表示覆盖已有的值
```

### 路径帮助函数

提供常用路径获取函数:

```typescript
import { port, host, authKey, ffmpegPath, ffprobePath, ffplayPath } from 'node-karin'

// 获取HTTP服务端口
const httpPort = port() // 默认7777

// 获取HTTP服务主机
const httpHost = host() // 默认127.0.0.1

// 获取鉴权密钥
const authKeyValue = authKey() // 如果为默认值会生成随机密钥

// 获取FFmpeg相关路径
const ffmpeg = ffmpegPath()
const ffprobe = ffprobePath()
const ffplay = ffplayPath()
```

## 使用示例

```typescript
import { 
  initConfig, 
  formatObject, 
  createCount, 
  getCacheCfg, 
  clearCache, 
  getYaml, 
  setConfig, 
  env 
} from 'node-karin'
import { configPath } from 'node-karin/root'

// 初始化配置
await initConfig(root)

// 读取现有配置
const groupConfig = getYaml('groups', 'user')
const envConfig = env()

// 创建配置缓存系统
const configCache = {}
const accessCount = createCount()

// 获取用户配置
function getUserConfig(userId) {
  return getCacheCfg(
    configCache, 
    accessCount, 
    [`user.${userId}`, 'default.user']
  )
}

// 设置用户配置
function setUserConfig(userId, config) {
  configCache[`user.${userId}`] = formatObject(config)
  
  // 如果需要持久化
  if (config.shouldPersist) {
    setConfig('users', {
      ...getYaml('users', 'user'),
      [userId]: config
    })
  }
}

// 定期清理缓存
clearCache(accessCount, configCache)
```

## 配置文件操作子模块（file）

file子模块用于管理和操作各类配置文件，支持热更新、缓存、迁移等高级特性。所有API均可通过`config.file`命名空间访问。

### 1. adapter.json 适配器配置

```typescript
import { adapter, timeout, webSocketServerToken } from 'node-karin'

/**
 * 获取适配器配置(adapter.json)
 * @returns 适配器配置对象
 */
adapter()

/**
 * 获取OneBot ws_server超时时间
 * @returns 超时时间(秒)
 */
timeout()

/**
 * 获取wsServer鉴权token
 * @returns token字符串
 */
webSocketServerToken()
```

### 2. config.json 全局配置

```typescript
import { config, master, admin } from 'node-karin'

/**
 * 获取全局配置(config.json)
 * @returns 配置对象
 */
config()

/**
 * 获取Bot主人列表
 * @returns 主人ID数组
 */
master()

/**
 * 获取Bot管理员列表
 * @returns 管理员ID数组
 */
admin()
```

### 3. env 环境变量配置

```typescript
import { env, getEnv, setEnv, writeEnv, ffmpegPath, ffprobePath, ffplayPath, port, host, authKey } from 'node-karin'

/**
 * 获取当前环境变量对象
 * @returns 环境变量对象
 */
env()

/**
 * 获取.env文件内容（带注释）
 * @param filePath 可选，指定.env文件路径
 * @returns 键值对对象
 */
getEnv()

/**
 * 设置单个环境变量
 * @param data 键值对对象
 * @returns 是否成功
 */
setEnv({ HTTP_PORT: 8080 })

/**
 * 批量写入环境变量
 * @param data 键值对数组
 * @param cwd 可选，env文件路径
 * @param isCover 是否覆盖
 */
writeEnv([{ key: 'DEBUG', value: 'true', comment: '调试模式' }])

/**
 * 获取ffmpeg/ffprobe/ffplay路径
 */
ffmpegPath(); ffprobePath(); ffplayPath();

/**
 * 获取HTTP端口/主机/鉴权key
 */
port(); host(); authKey();
```

### 4. groups.json 群聊/频道配置

```typescript
import { groups, getGroupCfg, getGuildCfg } from 'node-karin'

/**
 * 获取所有群聊/频道配置
 * @returns 配置对象
 */
groups()

/**
 * 获取指定群聊配置
 * @param groupId 群号
 * @param selfId 机器人ID
 * @returns 群聊配置
 */
getGroupCfg('123456', '10001')

/**
 * 获取指定频道配置
 * @param guildId 频道ID
 * @param channelId 子频道ID
 * @param selfId 机器人ID
 * @returns 频道配置
 */
getGuildCfg('guild123', 'channel456', '10001')
```

### 5. privates.json 私聊/私信配置

```typescript
import { privates, getFriendCfg, getDirectCfg } from 'node-karin'

/**
 * 获取所有私聊配置
 * @returns 配置对象
 */
privates()

/**
 * 获取指定好友配置
 * @param userId 用户ID
 * @param selfId 机器人ID
 * @returns 好友配置
 */
getFriendCfg('user123', '10001')

/**
 * 获取指定频道私信配置
 * @param userId 用户ID
 * @param selfId 机器人ID
 * @returns 私信配置
 */
getDirectCfg('user123', '10001')
```

### 6. render.json 渲染配置

```typescript
import { getRenderCfg } from 'node-karin'

/**
 * 获取渲染配置
 * @returns 渲染配置对象
 */
getRenderCfg()
```

### 7. pm2.json 进程管理配置

```typescript
import { pm2 } from 'node-karin'

/**
 * 获取pm2配置
 * @returns pm2配置对象
 */
pm2()
```

### 8. redis.json Redis配置

```typescript
import { redis } from 'node-karin'

/**
 * 获取redis配置
 * @returns redis配置对象
 */
redis()
```

### 9. 批量初始化所有配置缓存

```typescript
import { initConfigCache } from 'node-karin'

/**
 * 初始化所有配置缓存
 * @param dir 配置文件根目录
 */
initConfigCache('/your/config/dir')
```

---

> 所有配置API均支持热更新和缓存，推荐通过命名空间`config.file`或直接导入方式调用。详细类型定义请参考源码或类型声明文件。 