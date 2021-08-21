import 'package:starter_testing_project_mobile/models/user.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class UserData {
  Future<User> fetchUser(http.Client client, id) async {
    final response = await client
        .get(Uri.parse("https://jsonplaceholder.typicode.com/users/$id"));

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body));
    } else {
      throw new Exception("Failed to fetch user");
    }
  }

  Future<String> postUser(http.Client client) async {
    final response = await client
        .post(Uri.parse("https://jsonplaceholder.typicode.com/users/"));
    if (response.statusCode == 201) {
      return "success";
    } else {
      throw new Exception("Failed to create user");
    }
  }
}
