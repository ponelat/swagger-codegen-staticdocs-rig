### Swagger Codegen
## Static Html Doc Templates

This is an ongoing development rig for working with mustache generator found in swagger-codegen
The object is to generate docs based on data from swagger-codegen. 
ie: it is driven by a JSON obejct and redered using mustache

> See Todo list... [todo.org](todo.org)

> See [live version](http://ponelat.github.io/swagger-codegen-staticdocs-rig)

## Install

#### Requirements

- Ruby + bundler 
- Node.js + bower

#### To get the needed modules

```bash
bower install && bundle install
```

#### To serve the files

```bash
npm run bs
```

#### To build the CSS from the Sass files

```bash
npm run compass_build
```


### to copy over the templates into swagger-codegen project (folder, not repo), then run the script to compile...
#### Note: package.json needs to know the path to swagger-codegen (defaults to ../swagger-codegen)
#### configure 'swagger_path' in package.json accordingly
```bash
npm run swagger
```
