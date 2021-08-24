import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import '../models/photo.dart';

class PhotoData {
  Future<Photo> fetchPhoto(http.Client client) async {
    final response = await client
        .get(Uri.parse('https://jsonplaceholder.typicode.com/photos/1'));

    if (response.statusCode == 200) {
      return Photo.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load photo');
    }
  }
}