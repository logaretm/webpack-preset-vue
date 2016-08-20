# Example

### Installing
To get started using this example run:

`npm install`


### Building
To build the bundle I've included a build script:

`npm run build`


Notice that the babelrc config is:
```javascript
{
    "presets": [
        ["es2015", { "modules": false }]
    ]
}
```

This will prevent babel from converting ES6 imports, since Webpack 2.0 understands them now and to take advantage of tree shaking.
