# Instructions

## Getting Started

This project is a second practice project as part of learning Testing(Unit Testing) for development.

# Current Exercise - Teting

This excercise is intendend to make sure everyone is on the same page in writing well structured clean and tested code.

## Steps to follow

Since Everyone is familiar with the Git workflow, there is no need to mention it here but don't forget to apply best practices.

1. Create your own data model in `lib/models` directory : the model is appreciated if it comes from real API but It can be your own.
2. For the Model you created write some api calls in `lib/data` directory
3. Now, Its time to write test, go to `test` dir and create test file by following the naming convention of test files
4. In the test file write a `void main` function and annotate the function with `@GenerateMocks([http.Client])`
5. Now run the following command to generate the mocks `flutter pub run build_runner build`
6. Then write tests for all senarios you write to interact with API
7. Run your tests and make sure it passes all tests!!
8. You are done! Good Job!

# If you have any other questions, feel free to look it up, ask your team leads or really anyone else. Thank You.
