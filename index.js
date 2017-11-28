const glob = require('glob')
const fs = require('fs')

function envReplace (pattern) {
  const fileNames = glob.sync(pattern)

  fileNames.forEach(fileName => {
    let file = fs.readFileSync(fileName, 'utf-8')

    Object.keys(process.env).forEach(variable => {
      const re = new RegExp(`\\$${variable}`, 'g')
      file = file.replace(re, process.env[variable])
    })

    fs.writeFileSync(fileName, file)
  })
}

module.exports = envReplace
