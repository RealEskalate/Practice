class User {
  final String id;
  final String fullName;
  final String email;
  final String userRole;

  User(
      {required this.id,
      required this.fullName,
      required this.email,
      required this.userRole});

  /**
   * This constructor is used to create a new
   * user object using data that is passed in
   * the form of Json
   */
  User.fromJson(Map<String, dynamic> data)
      : id = data['id'],
        fullName = data['fullName'],
        email = data['email'],
        userRole = data['userRole'];

  /**
   * `toJson` returns a Map object in in json format
   * to be used when there is a need to Encode object
   * in to json format 
   */
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'fullName': fullName,
      'email': email,
      'userRole': userRole,
    };
  }
}
