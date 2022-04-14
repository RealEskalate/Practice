# starter project mobile

## Getting Started

This project is a starting point for a Flutter application starter challenge.

# Current Exercise - Flutter challenge

This excercise is intendend to make sure everyone is on the same page in using
flutter for mobile application development and learn the Good practices that the team is follow to build scallable and performant applications.

## Steps to follow

All `git` and github workflows must be followed with a single change on commit the commit message
Since we have multiple teams and Mobile team is responsible for this particular excercise make sure
to add `[Mobile]` before your git messages. (eg. `[Mobile] Update README.md`)

1. **_pull_** the update into the main branch and **_create_** a new branch or **_rebase_** if you want to use
   an existing branch.
2. We are following a clean architecture which means everything relalted to one feature should be put under same directory and subdirctories.
Example : lib/blog --  a root directory for a feature
          lib/blog/data_provider -- everything related to API/Databse interactions goes here
          lib/blog/repository -- this direcotry create independency between data_provider and bloc
          lib/blog/bloc --  the buisiness logics goes here(states)
          lib/blog/presentation -- All UIs goes here
3. Your pages should have a static variable called `PageRoute` and set the value as `/class_name`
4. In Order to see what is going on your page you will need to creat the route first, so go to file
   `lib/route.dart` and add your page to the route. (there is an already written example to follow)
5. Now your route is ready, then add your Naviagation call using the static route name
6. Now you are ready to build your page :) NOTE: here there is not limitation to what you can do
   get creative and try to show beautyful UIs
7. Then, you need to make you understand bloc state management, Go to the bloc subdirectory and create 3 classes called `FeatureNameBloc`, `FeatureNameEvent` and `FeatureNameState` and define all possilbe events and states your application needs

8. Now is the time make integrations, make your API calls in data_provider subdirectory. and call those function from the repository direcory 

9. Finally call these functions and the main.dart file and provide your blocs there then, and consume them in your UIs

10. You made it, Now what is left is Testing, Test your functions and classes and finally integration testing

# If you have any other questions, feel free to look it up, ask your team leads or really anyone else. Thank You.
