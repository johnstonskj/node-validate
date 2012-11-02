node-validate
=============

This provides a simple is&lt;Type> and assert&lt;Type> module for 
[Node.js][node].  Typically these are used as validators, either 
for parameter testing or in unit test code. 

[node]: http://nodejs.org/
[npm]: http://npmjs.org/

Install
-------

The usual, [npm][npm], add a dependency in your package.json to 
<code>validate-type</code> and run:

    $ npm install

API
---

```javascript
var Validate = require('validate');

Validate.isInteger(0); // true
Validate.isString(0);  // false;

Validate.assertNumber(1/0); // nothing
Validate.assertArray('');   // Error
```

Examples
--------

TBD
