import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/user.dart';
import 'package:starter_testing_project_mobile/models/user.dart';

import 'user_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  group('post user', () {
    final company = Company(
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets");
    final user = User(
        username: "abebe",
        name: "Abebe Kebede",
        email: "abebe@gmail.com",
        company: company);
    test('returns true if the http call completes successfully', () async {
      final client = MockClient();
      final userData = UserData();
      when(client.post(Uri.parse("https://jsonplaceholder.typicode.com/users/"),
              body: user.toJson()))
          .thenAnswer((realInvocation) async => http.Response('''{
"name": "Abebe Kebede",
"username": "abebe",
"email": "abebe@gmail.com",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
}''', 201));
      expect(await userData.postUser(client, user), isA<String>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final userData = UserData();
      when(client.post(Uri.parse('https://jsonplaceholder.typicode.com/users/'),
              body: user.toJson()))
          .thenAnswer((_) async => http.Response('User already exists', 403));

      expect(userData.postUser(client, user), throwsException);
    });
  });
}
