import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/user.dart';
import 'package:starter_testing_project_mobile/models/user.dart';

import 'user_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  group('fetch user', () {
    test('returns a User if the http call completes successfully', () async {
      final client = MockClient();
      final userData = UserData();

      when(client
              .get(Uri.parse("https://jsonplaceholder.typicode.com/users/1")))
          .thenAnswer((realInvocation) async => http.Response('''{"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
}''', 200));
      expect(await userData.fetchUser(client, 1), isA<User>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final userData = UserData();
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/users/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(userData.fetchUser(client, 1), throwsException);
    });
    ;
  });
}
