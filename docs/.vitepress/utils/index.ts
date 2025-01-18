// import { Package } from 'node-karin'
// import { requireFile } from './require'
// import { exec } from './exec'

// const getPkg = (isForcibly = false): Promise<Package> => {
//   return requireFile('package.json', { force: isForcibly })
// }

// /**
//  * @description 获取指定包的本地版本号 如果获取失败则会获取package.json中的版本号
//  * @param name 包名
//  */
// export const getPkgVersion = async (name: string): Promise<string> => {
//   const { status, stdout, error } = await exec(`npm list ${name} --depth=0`)
//   if (status) {
//     if (error?.stack?.toString().includes('empty')) {
//       throw new Error(`获取失败，${name} 未安装`)
//     }
//     throw error
//   }

//   const reg = new RegExp(`${name}@(\\d+\\.\\d+\\.\\d+)`, 'gm')
//   const result = reg.exec(stdout.toString())
//   if (result?.[1]) return result[1]

//   const pkg = await getPkg()
//   return pkg?.dependencies?.[name] || pkg?.devDependencies?.[name] || pkg?.peerDependencies?.[name]
// }


import { exec } from 'child_process'
import util from 'util'

const execPromise = util.promisify(exec)

export async function getInstalledVersion (packageName = 'node-karin') {
  try {
    // 执行 npm list 命令获取当前安装版本
    const { stdout, stderr } = await execPromise(`npm list ${packageName} --depth=0`)
    if (stderr) {
      console.error(`命令执行出错: ${stderr}`)
      return null
    }

    // 解析输出
    const versionMatch = stdout.match(new RegExp(`${packageName}@([\\d.]+)`))
    if (versionMatch && versionMatch[1]) {
      const installedVersion = versionMatch[1]
      console.log(`当前安装的 ${packageName} 版本号: ${installedVersion}`)
      return installedVersion
    } else {
      console.log(`未找到 ${packageName} 的安装版本`)
      return null
    }
  } catch (error) {
    console.error(`获取版本号时出错: ${error.message}`)
    return null
  }
}

getInstalledVersion()