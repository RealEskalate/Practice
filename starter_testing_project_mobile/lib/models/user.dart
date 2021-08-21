class User {
  late String _username;
  late String _name;
  late String _email;
  late Company _company;

  String get username => _username;
  String get name => _name;
  String get email => _email;
  Company get company => _company;

  set company(var comp) {
    _company = comp;
  }

  set name(String name) {
    _name = name;
  }

  set email(String email) {
    _email = email;
  }

  User(
      {required String username,
      required String name,
      required String email,
      required Company company}) {
    this.company = company;
    this.name = name;
    this.email = email;
    this._username = username;
  }

  User.fromJson(Map json) {
    company = Company.fromJson(json['company']);
    name = json['name'];
    email = json['email'];
    _username = json['username'];
  }

  Map<String, dynamic> toJson() => {
        "name": name,
        "username": username,
        "email": email,
        "company": company.toJson(),
      };
}

class Company {
  late String name;
  late String catchPhrase;
  late String bs;

  Company({required this.name, required this.catchPhrase, required this.bs});

  Company.fromJson(Map json) {
    name = json['name'];
    catchPhrase = json['catchPhrase'];
    bs = json['bs'];
  }

  Map<String, dynamic> toJson() => {
        "name": name,
        "catchPhrase": catchPhrase,
        "bs": bs,
      };
}
