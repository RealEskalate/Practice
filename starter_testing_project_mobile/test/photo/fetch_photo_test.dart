import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/photo.dart';
import 'package:starter_testing_project_mobile/models/photo.dart';
import 'fetch_photo_test.mocks.dart';

//import '../post/fetch_post_test.mocks.dart';

// Generate a MockClient using the Mockito package.
// Create new instances of this class in each test.
@GenerateMocks([http.Client])
void main() {
  group('fetchPhoto', () {
    test('returns a photo if the http call completes successfully', () async {
      final client = MockClient();
      final photoData = PhotoData();

      // Use Mockito to return a successful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/photos/1')))
          .thenAnswer((_) async =>
              http.Response('{"albumId": 1, "id": 2, "title": "mock", "url": "http://loremipsum", "thumbnailUrl": "http://loremipsum.jpg"}', 200));

      expect(await photoData.fetchPhoto(client), isA<Photo>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final photoData = PhotoData();

      // Use Mockito to return an unsuccessful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('https://jsonplaceholder.typicode.com/photos/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(photoData.fetchPhoto(client), throwsException);
    });
  });
}