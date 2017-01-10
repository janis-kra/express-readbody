# express-readbody

Convenience function for easier reading of request data.

## Why?

Use this for a small project in which you just want the payload of a handful of POST or PUT requests to be read as a string.
For anything more complex or big, you probably want to use the excellent [body-parser middleware](https://www.npmjs.com/package/body-parser) or something similar.

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
