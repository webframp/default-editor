# default-editor [![Build Status](https://travis-ci.org/webframp/default-editor.svg?branch=master)](https://travis-ci.org/webframp/default-editor)

> Get the user's default editor based on the environment variable $EDITOR


## Install

```
$ npm install --save default-editor
```


## Usage

The exe defined by $EDITOR is assumed to be in the $PATH

```js
const defaultEditor = require('default-editor);

// macOS
console.log(defaultEditor);
//=> 'vim'

// Windows
console.log(defaultEditor);
//=> 'notepad.exe'
```


## License

MIT © [Sean Escriva](https://webframp.com)

## Credits

Directly based on https://github.com/sindresorhus/default-shell and probably less useful.
