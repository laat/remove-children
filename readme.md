# remove-children
[![Build Status](https://travis-ci.org/laat/remove-children.svg?branch=master)](https://travis-ci.org/laat/remove-children)

> Remove children from DOM-node

## Motivation ([stackoverflow](http://stackoverflow.com/a/3955238/2427613))

It is tempting set `innerHTML` to empty-string, but it is slow.

```javascript
var myNode = document.getElementById("foo");
myNode.innerHTML = '';
```

Somewhat unintuitively a while loop is much faster.

```javascript
var myNode = document.getElementById("foo");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
```

## Install

```
$ npm install --save remove-children
```

## Usage

```javascript
var removeChildren = require('remove-children')

var div = document.createElement('div')
div.appendChild(document.createElement('div'))
div.appendChild(document.createTextNode('some text'))

div.innerHTML
//=> '<div></div>some text'

removeChildren(div)

div.innerHTML
//=> ''
```

## License

MIT © [Sigurd Fosseng](https://github.com/laat)
