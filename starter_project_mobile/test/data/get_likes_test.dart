import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';
import 'package:starter_project_mobile/data/get_likes.dart';

import 'get_likes_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  group('fetchLikes', () {
    final uri= '${LikeDataProvider.SERVER_IP}/resources';
    test('returns an number of likes if the http call completes successfully', () async {
      final  client = MockClient();
      final LikeDataProvider dataProvider = LikeDataProvider(httpClient: client);

      // Use Mockito to return a successful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('$uri/1')))
          .thenAnswer((_) async =>
              http.Response('{"_id": "1", "likes": 2}', 200));

      expect(await dataProvider.getLikes("1"), 2);
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();
      final LikeDataProvider dataProvider = LikeDataProvider(httpClient: client);

      // Use Mockito to return an unsuccessful response when it calls the
      // provided http.Client.
      when(client
              .get(Uri.parse('$uri/1')))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(dataProvider.getLikes("1"), throwsException);
    });
  });
}
