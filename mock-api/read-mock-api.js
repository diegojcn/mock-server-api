'use strict'

const glob = require("glob"), fs = require("fs")

module.exports = function() {
    return new Promise((resolve, reject) => {
        glob("mock-api/**/*json", function (err, files) {
            let matters = []
            let index = 0

            if (err) {
                console.log("[Mock] cannot read the folder, something goes wrong with glob", err)
                reject(err)
            }

            files.forEach(function (file) {
                fs.readFile(file, 'utf8', function (err, data) {
                    if (err) {
                        console.log("[Mock] cannot read the file, something goes wrong with the file", err)
                        reject(err)
                    }

                    matters.push(JSON.parse(data))

                    ++index

                    if (index == files.length) {
                        resolve(matters)
                    }
                })
            })
        })
    })
}
