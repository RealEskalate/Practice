class Article {
  String id;
  String title;
  String content;
  String description;
  String createdAt;
  String updatedAt;
  List<dynamic> imageUrls;
  Map<String, dynamic> rating;
  Map<String, String> user;

  Article({
    required this.title,
    required this.content,
    required this.imageUrls,
    required this.id,
    required this.description,
    required this.createdAt,
    required this.updatedAt,
    required this.rating,
    required this.user,
  });

  factory Article.fromJSON(Map<String, dynamic> jsonObject) {
    return Article(
      id: jsonObject['_id'] ?? "",
      title: jsonObject['title'] ?? "",
      content: jsonObject['content'] ?? "",
      imageUrls: jsonObject['imageUrls'] ?? [],
      description: jsonObject['description'] ?? "",
      createdAt: jsonObject['createdAt'] ?? "",
      updatedAt: jsonObject['updatedAt'] ?? "",
      rating: jsonObject['rating'] ?? {},
      user: jsonObject['user'] ?? {},
    );
  }
}
