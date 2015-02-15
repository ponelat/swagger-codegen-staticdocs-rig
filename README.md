### Swagger Codegen
## Static Html Doc Templates

This is an ongoing development rig for working with mustache generator found in swagger-codegen
The object is to generate docs based on data from swagger-codegen. 
ie: it is driven by a JSON obejct and redered using mustache

## Install

#### Requirements

- Ruby + bundler 
- Node.js + bower

#### To get the needed modules

    ```bash
    bower install
    bundle install
    ```

>   To build the highlight.js files, python is needed

#### To serve the files

    ```bash
    npm run bs
    ```

#### To build the CSS from the Sass files

    ```bash
    npm run compass
    ```

## List

#### Needed

- [ ] Show TOC in mobile view.
- [ ] Describe models.
- [ ] Integrate models with API, link them together

#### Possible

- [ ] We can use 100% split widths on mobile view. So, horizontal scroll.
- [ ] Put in some context headers in code examples.
- [ ] In TOC: Switch between list of API methods and API endpoints(paths) 
