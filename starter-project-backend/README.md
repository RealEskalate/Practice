--> We use MVC Archirecture. i.e we will have models, routes and controllers.
--> server.ts file is used to create our express app and create mongodb connection through mongoose package.
--> under the routes file we will set up our express routers for each model
--> under controllers we will use models and do CRUD operations and this operations are going to be called by routes
--> routes are called by app.ts based on paths

--> look at the scripts under package.json file on how to run the project(you just need to use 'npm run dev')

BLOG List API:

Comment:

POST → Add comment
GET → Get comment by Id
GET → Get All comments
GET → Get specific comment
PATCH → Update comment by Id
DEL → Delete comment by Id

Article:

POST → Add article
GET → Get article by Id
GET → Get All article
PATCH → Update article by Id
DEL → Delete article by Id

User

POST → Signin User
POST -> signup User
GET → Get user by Id
GET → Get All user
PATCH → Update user by Id
DEL → Delete user by Id
