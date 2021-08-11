import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/todo.dart';
import 'package:starter_testing_project_mobile/models/todo.dart';

<<<<<<< HEAD
import "fetch_todo_test.mocks.dart";

@GenerateMocks([http.Client])
void main() {
  group('fetch todo', () {
    //successful fetch
    test('returns todo if the http call completes successfully', () async {
      final client = MockClient();
      final todoData = TodoData();

      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1')))
          .thenAnswer((_) async => http.Response(
              '{"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}',
              200));
      expect(await todoData.fetchTodo(client), isA<Todo>());
    });

    //error fetch
    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final todoData = TodoData();
=======
import 'fetch_todo_test.mocks.dart';

// Generate a MockClient using the Mockito package.
// Create new instances of this class in each test.
@GenerateMocks([http.Client])
void main() {

  group('fetchTodo', () {
    test('returns a Todo if the http call completes successfully', () async {
      final client = MockClient();
      final todoData = TodoData();

      // Use Mockito to return a successful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1')))
          .thenAnswer((_) async =>
              http.Response('{"userId": 1, "id": 1, "title": "mock", "completed": true}', 200));

      expect(await todoData.fetchTodo(client), isA<Todo>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final todoData = TodoData();

      // Use Mockito to return an unsuccessful response when it calls the
      // provided http.Client.
>>>>>>> [Mobile] Add files to starter testing project
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(todoData.fetchTodo(client), throwsException);
    });
  });
}
