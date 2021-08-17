import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';
import 'package:starter_testing_project_mobile/data/comment.dart';
import 'package:starter_testing_project_mobile/models/comment.dart';

import '../album/fetch_album_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  group('Fetch Album Test', () {
    final client = MockClient();
    final commentData = CommentData();
    test('returns a comment if http call completes successfully', () async {
      when(client.get(
              Uri.parse('https://jsonplaceholder.typicode.com/comments/1')))
          .thenAnswer(
        (_) async => http.Response(
            '{"postId": 1,"id": 1,"name": "id labore ex et quam laborum","email": "Eliseo@gardner.biz","body": "autem quasi reiciendis et nam sapiente accusantium"}',
            200),
      );

      expect(await commentData.fetchComment(client, 1), isA<Comment>());
    });

    test('throws an error if http did not complete', () async {
      when(client.get(
              Uri.parse('https://jsonplaceholder.typicode.com/comments/2')))
          .thenAnswer((_) async => http.Response('Not found', 404));

      expect(commentData.fetchComment(client, 2), throwsException);
    });
  });
}
