import 'dart:convert';
import 'package:http/http.dart' as http;
import '../model/article.dart';

class BlogDataProvider {
  final endPointUrl = "https://blog-app-backend.onrender.com/api/articles/all";
  // final unencodedPath = "/api/articles/all";

  final client = http.Client();

  Future<List<Article>> getArticles() async {
    try {
      final uri = Uri.parse(endPointUrl);
      final response = await client.get(uri);
      List<dynamic> jsonObjects = jsonDecode(response.body);

      List<Article> articles = [];

      articles = jsonObjects
          .map((dynamic jsonObject) => Article.fromJSON(jsonObject))
          .toList();

      return articles;
    } catch (e) {
      throw ("Can't get articles! API Error" + e.toString());
    }
  }
}
