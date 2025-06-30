function readPackage(pkg, context) {
  // This will change any packages using baz@x.x.x to use baz@1.2.3
  if (pkg.dependencies.vite) {
    pkg.dependencies.vite = 'npm:rolldown-vite@latest'
  }

  if (pkg.peerDependencies.vite) {
    console.log(pkg.peerDependencies.vite)
  }

  if (pkg.optionalDependencies.vite) {
    console.log(pkg.optionalDependencies.vite)
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}