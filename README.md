# Automatic Attendance Tracker

### A platform where teachers can automatically update the attendance by just uploading the photographs of classrooms. 
<br>

Table of Contents :bookmark_tabs:
=================
- [Live Website](#live-website)
- [API Documentation](#api-documentation) 
- [User Functions](#user-functions)
- [Features](#features)
- [Steps to run the application locally](#steps-to-run-the-application-locally)
- [Tech Stack Used](#tech-stack-used)

## Live Website

- The website is deployed at https://auto-attendance-tracker.herokuapp.com/
- You can register a new account or login with the following credentials:
```
Email: snehavinayaka511@gmail.com
Password: password1
```

## API Documentation

- The API documentation can be viewed at https://auto-attendance-tracker-api.herokuapp.com/v1/prod-docs

## User Functions

After logging in, the user can:
- create a new classroom
- edit details of an exising classroom
- delete an existing classroom
- add student to a classroom
- edit details of a student
- remove student from a classroom
- update attendance of a class by uploading its image
- view attendance of a classroom
- download attendance of a classroom in Excel format
- delete attendance of a particular class  
- change his/her password
- manage images uploaded by him/her

## Features

 - **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Image uploading** using [cloudinary](https://cloudinary.com/documentation/image_upload_api_reference)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Docker support**
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Steps to run the application locally

### Pre Requisite

Ensure that you have Node version >= 16.13.2

### Clone the repo

```bash
git clone https://github.com/Sneha-511/auto-attendance-tracker
```

### Setting up the server

To setup the server locally, follow these steps:

1. Install the dependencies:

```bash
cd auto-attendance-tracker/server
yarn install
```

2. Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

3. Start the server:

```
yarn start
```

### Setting up the client

To setup the client locally, follow these steps:

1. Install the dependencies:

```bash
cd auto-attendance-tracker/client
npm install
```

2. Start the client:

```
npm start
```

## Tech Stack Used

### The MERN Stack

* [MongoDB](https://docs.mongodb.com/) - Document database - to store data 
* [Express.js](https://devdocs.io/express/) - Back-end web application framework running on top of Node.js
* [React](https://reactjs.org/docs/) - Front-end web app framework used
* [Node.js](https://nodejs.org/en/docs/) - JavaScript runtime environment 

### Middleware

* [Redux](https://redux.js.org/basics/usage-with-react) - For flux architecture, and fetching rapidly data
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM for MongoDB