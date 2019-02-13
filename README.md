# MEJSN Application

This is pet project for working with data using **M**ongoDB-**E**xpress-**JS**-**N**ode stack.
Frontend is build using MVC pattern in OOP paradigm.

Model fetches data from and to Backend using REST API

## Technologies
---
This project uses:
* **Mongoose** for Mongo database
* **Express** for Server and API
* **Vanilla** JS for FronEnd
* **Node** for JavaScript runtime

## Installation
---
To install this project clone the repo:
```
git clone https://github.com/YuraKolesnikov/nobel_new.git
```

```
cd nobel_new
```

```
npm run install-all
```

### NPM Scripts

|Command `npm run`  |Server |Client |
|--- |:---:|---:|
|`server-dev`|Hot reload | - |
|`server-build`|Static | - |
|`client-dev`| - |Hot reload |
|`client-build`| - |Bundled by Webpack |
|`clean`| - |rm build files|

## Project Structure
---
**Backend**

`/server`  
`--/db/` - Contains db controllers and main DataHandler, which connects to API  
`--/models/` - Contains the models for API Resources using *Mongoose*  
`--/api.js` - Routes for the API  
`--/server.js` - Server setup  

**Frontend**

`/.babelrc` - `babel` config  
`/webpack.config.js` - `webpack` config

`/src`  
`--/mvc/` - Contains MVC classes, EventEmitter class and buttonsets for rendering  
`--/router/` - URLParser class  
`--/app.js` - Registers MVC instances  
`--/scss/` - Stylesheets  

`/public`  
`--/data` - Mock data for early development and frontend testing  
`--/index.html` - Main file  
`
--/build.css
--/build.js
` - Build files

### Dependencies

**Frontend**
* `@babel/core: 7.2.2`
* `@babel/polyfill: 7.2.5`
* `@babel/preset-env: 7.2.3`
* `babel-loader: 8.0.4`
* `babel-preset-es2015: 6.24.1`
* `css-loader: *`
* `extract-text-webpack-plugin: 2.1.2`
* `file-loader: 3.0.1`
* `isomorphic-fetch: 2.2.1`
* `node-sass: 4.11.0`
* `postcss-loader: 3.0.0`
* `sass-loader: 7.1.0`
* `style-loader: *`
* `webpack: 2.6.1`
* `webpack-dev-server: 2.4.5`

**Backend**
* `body-parser: 1.18.3`
* `express: 4.16.4`
* `lodash: 4.17.11`
* `mongodb: 3.1.13`
* `mongoose: 5.4.6`

## API
All user endpoints are behind the `/api` endpoint.

13.02.2019
Right now POST, DELETE and PATCH requests are working only from Postman and have no interface in frontend

**`GET`**  
`/laureates` - Return a list of all laureates  
`/laureates/:id` - Where `:id` is the id of a `laureate`.

**`POST`**  
`/laureates/add` - Create a new `laureate` based on the payload of the request

**`DELETE`**  
`/laureates/delete/:id` - Delete a laureate matching the `:id` specified

**`PATCH`**  
`/laureates/update/:id` - Update a user based on the payload of the request

---
The client with data can be accessed by hitting this url:
`localhost:3000` with server started.