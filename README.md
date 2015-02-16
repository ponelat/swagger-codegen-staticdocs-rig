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
npm run compass
```
