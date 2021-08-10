import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import '../models/post.dart';

class PostData {
// Get single albutm
  Future<Post> fetchPost(http.Client client) async {
    final response = await client
        .get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));

    if (response.statusCode == 200) {
      return Post.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load post');
    }
  }
}
