
class Resource {
  final String id;
  final int likes;
  Resource(
      {required this.id,
      required this.likes
      });
  factory Resource.fromJson(Map<String, dynamic> json) {
    return Resource(
        id: json['_id'],
        likes: json['likes']
    );
}

 }
