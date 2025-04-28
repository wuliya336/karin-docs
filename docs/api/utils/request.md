# request 模块

> [!note] 温馨提示
> 本文由AI辅助生成，可能存在不准确性。

request模块提供了网络请求相关的工具函数，扩展了axios的基础功能。

## 竞速请求

### raceRequest

同时向多个URL发送请求，返回最先成功响应的数据。

```typescript
import { raceRequest } from 'node-karin'
import type { AxiosRequestConfig } from 'axios'

/**
 * 竞速请求 返回最先成功响应的数据
 * @param urls 请求地址数组
 * @param config 请求配置，默认为 { method: 'HEAD', timeout: 10000 }
 * @returns 返回最先成功响应的数据，如果全部失败则返回null
 */
// 基本用法 - HEAD请求
const urls = ['https://api.github.com', 'https://api.gitee.com']
const response = await raceRequest(urls)

// 自定义配置 - POST请求
const postUrls = ['https://api1.example.com/post', 'https://api2.example.com/post']
const postResponse = await raceRequest(postUrls, {
  method: 'post',
  data: { foo: 'bar' },
  timeout: 5000  // 超时时间5秒
})

// 处理响应
if (postResponse) {
  console.log('最快响应的URL:', postResponse.config.url)
  console.log('响应数据:', postResponse.data)
} else {
  console.log('所有请求都失败了')
}
```

**函数说明**

这个函数会同时向多个URL发送相同的请求，并返回最先成功响应的结果。这在以下场景特别有用：
- 当你有多个可用的API端点，想使用响应最快的那个
- 当你需要从多个镜像站点获取资源
- 实现简单的负载均衡或故障转移机制

**参数**

- `urls`: 字符串数组，包含多个要请求的URL
- `config`: Axios请求配置对象，默认值:
  ```typescript
  {
    method: 'HEAD',  // 默认使用HEAD请求 
    timeout: 10000   // 默认超时时间10秒
  }
  ```

**返回值**

- 成功时: 返回最先成功的AxiosResponse对象
- 失败时: 如果所有请求都失败，则返回null

**注意事项**

- 默认使用HEAD请求方法，这对于简单检测URL可达性很有用
- 如果需要获取实际内容，可以将方法改为GET、POST等
- 当所有请求都失败或超时时，函数将返回null 