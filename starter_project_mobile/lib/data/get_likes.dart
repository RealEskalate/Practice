import 'dart:convert';
import 'dart:developer';
import 'package:http/http.dart' as http;
import 'package:starter_project_mobile/models/resources.dart';

class LikeDataProvider {
  static const String SERVER_IP = 'http://localhost:8181/api';
  final http.Client httpClient;

  LikeDataProvider({required this.httpClient});


  Future<int> getLikes(String resourceId) async {
    var res = await httpClient.get(
      Uri.parse('$SERVER_IP/resources/$resourceId'),
    );

    if (res.statusCode == 200) {
      return Resource.fromJson(jsonDecode(res.body)).likes;
    } else {
      throw Exception(json.decode(res.body)['message']);
    }
  }

}

