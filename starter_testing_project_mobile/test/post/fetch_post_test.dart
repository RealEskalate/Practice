import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/post.dart';
import 'package:starter_testing_project_mobile/models/post.dart';

import '../post/fetch_post_test.mocks.dart';

// Generate a MockClient using the Mockito package.
// Create new instances of this class in each test.
@GenerateMocks([http.Client])
void main() {
  group('fetchPost', () {
    test('returns an Post if the http call completes successfully', () async {
      final client = MockClient();
      final postData = PostData();

      // Use Mockito to return a successful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1')))
          .thenAnswer((_) async =>
              http.Response('{"userId": 1, "id": 2, "title": "mock", "body": "lorem ipsum"}', 200));

      expect(await postData.fetchPost(client), isA<Post>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final postData = PostData();

      // Use Mockito to return an unsuccessful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(postData.fetchPost(client), throwsException);
    });
  });
}
