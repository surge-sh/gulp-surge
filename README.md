# Gulp Surge

The Gulp plugin for [Surge](https://surge.sh).

## Getting started

Publish a static site or client-side application to [Surge](https://surge.sh). First, install the plugin using [npm](https://npmjs.org):

```sh
npm install --save-dev gulp-surge
```

Then, require it in your Gulpfile and add it as a task:

```js
const surge = require('gulp-surge')

const deploy = () => {
  return surge({
    project: './build',         // Path to your static build directory
    domain: 'example.surge.sh'  // Your domain or Surge subdomain
  })
}
```

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Chloi](http://chloi.io)
