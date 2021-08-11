import 'dart:convert';

import '../models/comment.dart';
import 'package:http/http.dart' as http;

class CommentData {
  Future<Comment> fetchComment(http.Client client, int id) async {
    final response = await client
        .get(Uri.parse('https://jsonplaceholder.typicode.com/comments/$id'));

    if (response.statusCode == 200) {
      return Comment.fromJson(jsonDecode(response.body));
    }

    throw Exception('Failed to load comment');
  }
}
