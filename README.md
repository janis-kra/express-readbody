# express-readbody
Convenience function for easier reading of request data

## Usage

``` js
const server = require('express')();

server.post('/hello', (req, res) => {
  readBody(req).then(body => console.log(body));
});
```
