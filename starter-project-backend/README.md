--> We use MVC Archirecture. i.e we will have models, routes and controllers.
--> app.ts file is used to create our express app and create mongodb connection through mongoose package.
--> under the routes file we will set up our express routers for each model
--> under controllers we will use models and do CRUD operations and this operations are going to be called by routes
--> routes are called by app.ts based on paths

--> look at the scripts under package.json file on how to run the project(you just need to use 'npm run dev')


Todo List API:

Task:

POST    → Add Task
GET     → Get Task by Id
GET 	→ Get All Tasks
GET	    → Get Task by Completed
PUT	    → Update Task by Id
DEL 	→ Delete Task by Id

Note:

define model

POST    → Add Note
GET	    → Get Note by Id
GET	    → Get All Notes
GET	    → Get Notes by Favorite
PUT	    → Update Note by Id
DEL 	→ Delete Note by Id

