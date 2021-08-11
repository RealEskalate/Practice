import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import '../models/meal.dart';

class MealRemoteSource {
  // Get random meal
  Future<Meal> fetchRandomMeal(http.Client client) async {
    final response = await client
        .get(Uri.parse('https://www.themealdb.com/api/json/v1/1/random.php'));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      return MealData.fromJson(jsonDecode(response.body)).meals[0];
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      throw Exception('Failed to fetch random meal');
    }
  }
}
