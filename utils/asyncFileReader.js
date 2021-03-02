const fs = require('fs')


module.exports = async function asyncFileReader(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) throw err
      resolve(JSON.parse(data))
    })
  })
}