# Mock server api

This is for help developers test their frontend app before creates real API environments avoiding losing time and unnecessary costs.

## Installation

First install [node](https://nodejs.org/en) by web site or by [homebrew](https://brew.sh/).
If you are going o use brew, first install brew and then rund this command:

```in
brew install node
```

## Project

Once node is installed, clone this repository and run this command:

```in
npm install
```

To run the project: 
```in
node app.js
```

## Create yout mock APIs
Inside the folder mock-api, create your json files with this pattern.
##### REMEMBER: You can create folders inside to organize your .json mocks.

```{
    "httpRequest":{
        "method": "GET",
        "path": "/path/test",
        "headers": {},
        "body":{
            "type": "JSON",
            "contentType": "application/x-www-form-urlencoded"
        }
    },
    "httpResponse":{
        "statusCode": 200,
        "body":{
            "charset": "UTF-8",
            "type": "JSON",
            "json": {
               // create you json response.
            }
        },
        "delay":{
            "timeUnit": "MILLISECONDS",
            "value": 500
        }
    }
}

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
