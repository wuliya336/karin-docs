import type { YamlComment } from 'node-karin'
// ---cut---
import { yaml, YamlEditor } from 'node-karin'

// 创建编辑器实例
const editor = new YamlEditor('config.yaml')

// 添加单个注释
editor.comment('name', '项目名称', true) // true 表示添加到键上方
editor.comment('version', '版本号', false) // false 表示添加到行尾

// 批量添加注释
const comments: YamlComment = {
  name: { comment: '项目名称', type: 'top' },
  version: { comment: '版本号', type: 'end' }
}
yaml.applyComments(editor, comments)

// 保存文件
editor.save()