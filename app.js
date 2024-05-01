'use strict'

const SERVER_PORT = 1080

const mockserver = require('mockserver-node')
    , mockServerClient = require('mockserver-client').mockServerClient
    , readMock = require('./mock-api/read-mock-api.js')

mockserver.start_mockserver({ serverPort: SERVER_PORT, verbose: true })
    .then(() => {
        console.log(" [app.js] loading...")
        readMock()
            .then((expectations) => {
                console.log(" [Mock] finish!")
                mockServerClient("localhost", SERVER_PORT)
                    .mockAnyResponse(expectations)
                    .then(
                        function () {
                            console.log(" [MockServer] created expectations");
                            console.log(" [MockServer] started")
                        },
                        function (error) {
                            console.log(JSON.stringify(error, null, ""))
                        }
                    )
            })
            .catch((err) => {
                console.log("[app.js] error on load file", err)
            })


    },
        function (err) {
            console, Log(JSON.stringify(err, null, " "))
        }
    )
