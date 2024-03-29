## Backend Team Starter Project

In this project new team members learn, try and experiment backend dev languages, tools and frameworks! The frameworks include Nodejs, expressjs, mongodb and mongoose. There might be other services to handle file upload and email services. 

Expressjs - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Nodejs - Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.

MongoDB - MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.

Mongoose -  Mongoose provides a straight-forward, schema-based solution to model your application data.

# Starter Project - Backend

This is where new backend team members will practice what they've understood in their respective learning paths. This document will serve as:

- Overview and description of what the project is going to be,
- Workflow as a backend team member and
- Source of any additional information you might need

## Overview

In this project you'll be required to develop a blog application where people will be able to write their blog articles, comment on articles as well as rate people's articles.
People should register as well as complete an authentication process if they want to apply write related features in their system.

## Features

- People should be allowed to register and sign in to their respective accounts
- People can write/update/delete articles of their own as well as see what other people have written
- People can write/update/delete comments of their own as well as see what other people have written on a particular article
- People can rate articles from 1-5
- People should only be allowed to update articles/comments when it's their own

## Workflow

### Before you begin, read the following rules

- **Unit Testing is mandatory at every feature you add or modify**
- **Documenation is mandatory at every phase**
- **Set a PR and assign a reviewer always for the changes you want to push to master**

### Phase-1 - Basic CRUD Stage
In this phase main task is to Implement basic create read update and delete api end points for each model(schema). Models, controllers and routes will be included in each of the model. Testing for respecting endpoint with success and failure senario is expected too.  

- No Authorization implementation
- No Authentication implementation
- No interlinking between models. Set their values statically for now

1. Implement CRUD for Users
2. Implement CRUD for Articles
3. Implement CRUD for Comments
4. Implement CRUD for Ratings

### Phase-2 - Interlink between models
In the second phase integration between models is expected, making single componets integrate with conceptual interactions are exepected to be implmented. After modfing each file and folder in a proper manner it's expected to write a test to gurate the intended features are good shape. 
1. Interlink Articles with Users
2. Interlink Comments with Articles
3. Interlink Ratings with Articles and Comments

### Phase-3 - Add Authorization and Authentication
In this part of project group is expected to integrate authntication and auturation by includeding modules and writting middlewares, and add guards to respective api endpoints.  

1. Add security measures for Users
2. Add security measures for Articles
3. Add security measures for Comments
4. Add security measures for Ratings

### Phase-4 - Add File Management
In this part of project integration of file managemnt and others services are going to be implmented.  
1. Allow users to upload their profile pictures (Use cloudinary service)
2. Allow users to upload a photo for their Articles (Use cloudinary service)

## Architecture

We will use MVC Archirecture. i.e we will have models, routes and controllers.

- server.ts file is used to create our express app and create mongodb connection through mongoose package.
- under the routes file we will set up our express routers for each model
- under controllers we will use models and do CRUD operations and this operations are going to be called by routes
- routes are called by app.ts based on paths
- look at the scripts under package.json file on how to run the project(you just need to use 'npm run dev')

## Sample Task Divisions:

### User:

POST → Signin User

POST -> signup User

GET → Get user by Id

GET → Get All user

PATCH → Update user by Id

DEL → Delete user by Id

### Article:

POST → Add article

GET → Get article by Id

GET → Get All article

PATCH → Update article by Id

DEL → Delete article by Id

### Comment:

POST → Add comment

GET → Get comment by Id

GET → Get All comments

GET → Get specific comment

PATCH → Update comment by Id

DEL → Delete comment by Id


# Getting started

To get the Node server running locally:

- Clone this repo using

```bash
git clone https://github.com/RealEskalate/Practice
```

- Change to the respective backend directory

```bash
cd 
```
starter_project_backend
- Install all required dependencies

```bash
npm install
```

- Receive environment variables either from your team lead or backend team members
- Start the local dev server. Run 'start' instead of 'dev' for production server instead

```bash
npm run dev
```

# Code Overview

## Scripts

- `start` - To build the project and run the application
- `dev` - To run the project in a development manner
- `test` - To run and test a specific test file
- `test:project` - To build and test the whole project. Also generates the code coverage of the project

