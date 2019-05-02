# example-react-cesium-library
An example/boilerplate repository with starter for react, resium/cesium based 
shared component library

## Also Read
This repository accompanies the [article]() published on Medium. Please go through it once before you start using this repository.

## Quick steps
To quickly run this example,

```
$ git clone https://github.com/traversals-analytics-and-intelligence/example-react-cesium-library.git cesium-react-library
$ cd cesium-react-library
$ npm install
$ npm run storybook
$ npm link

$ cd example-consumer
$ npm install // If you run into issues, then please remove cesium-react-library from example-consumer/package.json
$ npm link cesium-react-library
$ npm start
```

## How to use this?

### Initial steps

Clone the repository
```
$ git clone https://github.com/traversals-analytics-and-intelligence/example-react-cesium-library.git your-component-library-name
$ cd example-react-cesium-library
```

**Note**: Update `package.json` according to your needs.

Install dependencies
```
$ npm install
```

### Development
To run and use the storybook for development, use
```
$ npm run storybook
```
To enable watcher for the webpack build, use
```
$ npm run dev
```
Linking the library and its consumer using `npm link` mechanism.
```
your-component-library-name $ npm link
your-consumer-react-app $ npm link your-component-library-name
```

### Building and publishing
The component library can be published with 
```
$ npm publish
```
Once published you can install it in your consumer react app with,
```
$ npm install --save your-component-library-name
```

**Important**: Some extra webpack configuration is required in your react-app and can be found in the `example` folder or the article.

## Credits

This library is built using and referring,

* [Rinse-Repeat](https://github.com/cwlsn/rinse-react): An awesome boilerplate to quickly start a react component library by Connor Wilson.
* [Cesium](https://github.com/AnalyticalGraphicsInc/cesium): The main objective of this article by Analytical Graphics Inc.
* [Resium](https://resium.darwineducation.com/): Library of react components for cesium by Darwin Education.
* [react-webpack-boilerplate](https://github.com/HashemKhalifa/webpack-react-boilerplate): by HashemKhalifa


## Contributing and support
* Please feel free to create a Pull Request with clear explanation of the intended change.
* We will try to answer any questions you might have via issues.

## Disclaimer
* This library boilerplate was build with for a specific usage scenario. Please refer to the linked article for further information.
* The built files are bigger than necessary. Please check other resources linked in the article and you may find a more suitable guide.

## LICENCE
Apache License 2.0
