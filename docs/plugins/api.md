# 公开 API 列表

|          API 名称           |                备注                |
| :-------------------------: | :--------------------------------: |
|          `logger`           |       打印当前Bot的专属日志        |
|          `sendMsg`          |              发送消息              |
|        `sendLongMsg`        |             发送长消息             |
|      `sendForwardMsg`       |          发送合并转发消息          |
|         `recallMsg`         |     撤回消息，返回值不值得信任     |
|       `getAvatarUrl`        |            获取头像 URL            |
|     `getGroupAvatarUrl`     |           获取群头像 URL           |
|          `getMsg`           |              获取消息              |
|       `getHistoryMsg`       |            获取历史消息            |
|       `getForwardMsg`       |          获取合并转发消息          |
|    `getGroupHighlights`     |           获取群精华消息           |
|        `createResId`        |      构造资源 ID，不发送消息       |
|    `setGgroupHighlights`    |        设置或取消群精华消息        |
|         `sendLike`          |             发送好友赞             |
|      `groupKickMember`      | 群踢人，支持理由与拒绝再次申请选项 |
|       `setGroupMute`        |             禁言群成员             |
|      `setGroupAllMute`      |            设置全员禁言            |
|       `setGroupAdmin`       |         设置或取消群管理员         |
|    `setGroupMemberCard`     |             设置群名片             |
|       `setGroupName`        |              设置群名              |
|       `setGroupQuit`        |          退出群组或解散群          |
|    `setGroupMemberTitle`    |     设置群专属头衔，仅群主可用     |
|      `getStrangerInfo`      |           获取陌生人信息           |
|       `getFriendList`       |            获取好友列表            |
|       `getGroupInfo`        |             获取群信息             |
|       `getGroupList`        |             获取群列表             |
|    `getGroupMemberInfo`     |           获取群成员信息           |
|    `getGroupMemberList`     |           获取群成员列表           |
|       `getGroupHonor`       |           获取群荣誉信息           |
|   `setFriendApplyResult`    |          设置好友请求结果          |
|    `setGroupApplyResult`    |         设置加入群请求结果         |
| `setInvitedJoinGroupResult` |           设置群邀请结果           |
|      `setMsgReaction`       |          设置消息表情回应          |
|        `uploadFile`         |        上传群文件或私聊文件        |
|       `downloadFile`        |        下载文件到协议端本地        |
|     `createGroupFolder`     |            创建群文件夹            |
|     `renameGroupFolder`     |           重命名群文件夹           |
|      `delGroupFolder`       |            删除群文件夹            |
|      `uploadGroupFile`      |             上传群文件             |
|       `delGroupFile`        |             删除群文件             |
|  `getGroupFileSystemInfo`   |         获取群文件系统信息         |
|     `getGroupFileList`      |       获取群文件夹下文件列表       |
|      `setGroupRemark`       |             设置群备注             |
|   `getNotJoinedGroupInfo`   |           获取陌生群信息           |
|       `getAtAllCount`       |        获取全体艾特剩余次数        |
|     `getGroupMuteList`      |        获取群被禁言用户列表        |
|         `pokeUser`          |             戳一戳用户             |
|        `getCookies`         |            获取Cookies             |
|      `getCredentials`       |          获取相关接口凭证          |
|       `getCSRFToken`        |          获取 CSRF Token           |
|      `getHttpCookies`       |         获取 HTTP Cookies          |

## 调用示例

::: tip 提示
调用方式一共有两种，一种是在被动事件中调用，一种是主动调用
:::
