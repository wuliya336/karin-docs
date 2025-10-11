import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

function walkDir(dir, callback) {
  const files = readdirSync(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      walkDir(filePath, callback)
    } else if (file.endsWith('.md')) {
      callback(filePath)
    }
  }
}

function fixMarkdownFile(filePath) {
  let content = readFileSync(filePath, 'utf8')
  let modified = false

  // 修复各种HTML标签问题
  const fixes = [
    // 1. 修复标题中的泛型参数 - 这是主要问题源
    [/# (抽象\s+类|类|接口|类型别名|函数): ([^<\n]+)<([^>\n]+)>/g, '# $1: $2\\<$3\\>'],
    
    // 2. 修复继承关系中的泛型参数
    [/- \[`([^<`]+)<([^>`]+)>`\]/g, '- [`$1\\<$2\\>`]'],
    
    // 3. 修复构造函数和方法签名中的泛型参数
    [/> \*\*new ([^<*]+)<([^>*]+)>\*\*/g, '> **new $1\\<$2\\>**'],
    [/> \*\*([^<*]+)<([^>*]+)>\*\*/g, '> **$1\\<$2\\>**'],
    
    // 4. 修复返回类型中的泛型参数
    [/\): `([^<`]+)<([^>`]+)>`/g, '): `$1\\<$2\\>`'],
    [/\): ([^<`\n]+)<([^>`\n]+)>/g, '): $1\\<$2\\>'],
    
    // 5. 修复链接中的泛型参数
    [/\[`([^<\]`]+)<([^>\]`]+)>`\]/g, '[`$1\\<$2\\>`]'],
    [/\[([^<\]`]+)<([^>\]`]+)>\]/g, '[$1\\<$2\\>]'],
    
    // 6. 修复类型定义中的泛型参数（在代码块外）
    [/(?<!`)([A-Za-z_$][A-Za-z0-9_$]*)<([A-Za-z0-9_,\s|&\[\]]+)>(?!`)/g, '$1\\<$2\\>'],
    
    // 7. 修复已经被错误转义的泛型类型（在代码块中应该正常显示）
    [/`Promise`\\<`([^`]+)`\\>/g, '`Promise<$1>`'],
    [/`Array`\\<`([^`]+)`\\>/g, '`Array<$1>`'],
    [/`Set`\\<`([^`]+)`\\>/g, '`Set<$1>`'],
    [/`Map`\\<`([^`]+)`,\s*`([^`]+)`\\>/g, '`Map<$1, $2>`'],
    [/`Record`\\<`([^`]+)`,\s*`([^`]+)`\\>/g, '`Record<$1, $2>`'],
    [/`Partial`\\<`([^`]+)`\\>/g, '`Partial<$1>`'],
    [/`Required`\\<`([^`]+)`\\>/g, '`Required<$1>`'],
    [/`Readonly`\\<`([^`]+)`\\>/g, '`Readonly<$1>`'],
    
    // 8. 通用泛型类型修复（代码块中）
    [/`([A-Za-z_$][A-Za-z0-9_$]*)`\\<`([^`]+)`\\>/g, '`$1<$2>`'],
    
    // 9. 修复嵌套泛型
    [/`([A-Za-z_$][A-Za-z0-9_$]*)`\\<`([^`]+)`\\<`([^`]+)`\\>\\>/g, '`$1<$2<$3>>`'],
    
    // 10. 修复类型参数定义
    [/### ([A-Z])\n\n`\1` = `([^`]+)`/g, '### $1\n\n`$1` = `$2`'],
    
    // 11. 修复实现接口的泛型参数
    [/- \[`([^<`]+)`\]\([^)]+\)<`([^>`]+)`>/g, '- [`$1`]($&)\\<`$2`\\>'],
    
    // 12. 修复类型别名中的复杂泛型
    [/> \*\*([^*]+)\*\* = ([^<\n]+)<([^>\n]+)>/g, '> **$1** = $2\\<$3\\>'],
  ]

  for (const [pattern, replacement] of fixes) {
    const newContent = content.replace(pattern, replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf8')
    console.log(`已修复: ${filePath}`)
    return true
  }

  return false
}

// 主函数
function main() {
  const docsDir = './docs/guide/api/Types'  // 修正路径
  let fixedCount = 0

  try {
    walkDir(docsDir, (filePath) => {
      if (fixMarkdownFile(filePath)) {
        fixedCount++
      }
    })

    console.log(`\n总共修复了 ${fixedCount} 个文件`)
  } catch (error) {
    console.error('修复过程中出错:', error.message)
    process.exit(1)
  }
}

main()