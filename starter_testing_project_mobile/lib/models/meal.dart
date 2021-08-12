class MealData {
  List<Meal> meals = [];

  MealData({required this.meals});

  MealData.fromJson(Map<String, dynamic> json) {
    if (json['meals'] != null) {
      json['meals'].forEach((v) {
        meals.add(new Meal.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.meals != null) {
      data['meals'] = this.meals.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Meal {
  late String idMeal;
  late String strMeal;
  late String strCategory;
  late String strInstructions;
  late String strMealThumb;
  late String strYoutube;
  late String strSource;
  late String? strImageSource;
  late String? dateModified;

  Meal(
      {required this.idMeal,
      required this.strMeal,
      required this.strCategory,
      required this.strInstructions,
      required this.strMealThumb,
      required this.strYoutube,
      required this.strSource,
      required this.strImageSource,
      required this.dateModified});

  Meal.fromJson(Map<String, dynamic> json) {
    idMeal = json['idMeal'];
    strMeal = json['strMeal'];
    strCategory = json['strCategory'];
    strInstructions = json['strInstructions'];
    strMealThumb = json['strMealThumb'];
    strYoutube = json['strYoutube'];
    strSource = json['strSource'];
    strImageSource = json['strImageSource'];
    dateModified = json['dateModified'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['idMeal'] = this.idMeal;
    data['strMeal'] = this.strMeal;
    data['strCategory'] = this.strCategory;
    data['strInstructions'] = this.strInstructions;
    data['strMealThumb'] = this.strMealThumb;
    data['strYoutube'] = this.strYoutube;
    data['strSource'] = this.strSource;
    data['strImageSource'] = this.strImageSource;
    data['dateModified'] = this.dateModified;
    return data;
  }

  @override
  String toString() =>
      'Meal(id: $idMeal, strMeal: $strMeal, category: $strCategory)';
}
