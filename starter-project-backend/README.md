## Backend Team Starter Project

In this project new team members learn, try and experiment backend dev languages, tools and frameworks!

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

- No Authorization implementation
- No Authentication implementation
- No interlinking between models. Set their values statically for now

1. Implement CRUD for Users
2. Implement CRUD for Articles
3. Implement CRUD for Comments
4. Implement CRUD for Ratings

### Phase-2 - Interlink between models

1. Interlink Articles with Users
2. Interlink Comments with Articles
3. Interlink Ratings with Articles and Comments

### Phase-3 - Add Authorization and Authentication

1. Add security measures for Users
2. Add security measures for Articles
3. Add security measures for Comments
4. Add security measures for Ratings

### Phase-4 - Add File Management

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
