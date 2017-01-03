# express-readbody
Convenience function for easier reading of request data

## Installation

```
npm install --save express-readbody
```

## Usage

``` js
const server = require('express')();
const readBody = require('express-readbody');

server.post('/hello', (req, res) => {
  readBody(req).then(body => console.log(body));
});
```
