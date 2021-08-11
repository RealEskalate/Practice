import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';

import '../../lib/models/meal.dart';
import '../../lib/data/meal.dart';

import 'fetch_random_meal_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  // Create a mock object
  group('fetchRandomMeal', () {
    test(
        'Given a URL when we call fetchRandomMeal from MealRemoteSource Then we get a Meal type object',
        () async {
      var mockHttpClient = MockClient();
      MealRemoteSource mealRemoteSource = new MealRemoteSource();
      var mockMeals = <Meal>[];
      var mockMeal = new Meal(
        idMeal: 'idMeal',
        strMeal: 'mockStrMeal',
        strCategory: 'mockCategory',
        strInstructions: 'mockInstructions',
        strMealThumb: 'mockStrMealThumb',
        strYoutube: 'mockStrYoutube',
        strSource: 'mockStrSource',
        strImageSource: null,
        dateModified: null,
      );
      mockMeals.add(mockMeal);
      var mockJsonRes = {"meals": mockMeals};
      when(mockHttpClient.get(
              Uri.parse('https://www.themealdb.com/api/json/v1/1/random.php')))
          .thenAnswer((_) async => http.Response(jsonEncode(mockJsonRes), 200));

      expect(
          await mealRemoteSource.fetchRandomMeal(mockHttpClient), isA<Meal>());

      expect(
          await mealRemoteSource
              .fetchRandomMeal(mockHttpClient)
              .then((value) => value.idMeal),
          'idMeal');

      expect(
          await mealRemoteSource
              .fetchRandomMeal(mockHttpClient)
              .then((value) => value.strMeal),
          'mockStrMeal');
    });

    test(
        'Given a URL when we call fetchRandomMeal from MealRemoteSource Then we get Exception',
        () async {
      var mockHttpClient = MockClient();
      MealRemoteSource mealRemoteSource = new MealRemoteSource();
      when(mockHttpClient.get(
              Uri.parse('https://www.themealdb.com/api/json/v1/1/random.php')))
          .thenAnswer((_) async => http.Response('Not found', 404));

      expect(mealRemoteSource.fetchRandomMeal(mockHttpClient), throwsException);
    });
  });
}
