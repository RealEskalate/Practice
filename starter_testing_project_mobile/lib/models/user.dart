class User {
  late String _username;
  late String _fname;
  late String _lname;
  late DateTime _birthDate;

  String get username => _username;
  String get fname => _fname;
  String get lname => _lname;
  DateTime get birthDate => _birthDate;

  set birthDate(var strDate) {
    _birthDate = DateTime.parse(strDate);
  }

  set fname(String firstName) {
    _fname = firstName;
  }

  set lname(String lastName) {
    _lname = lastName;
  }

  User(
      {required String username,
      required String fname,
      required String lname,
      required String birthDate}) {
    this.birthDate = birthDate;
    this.fname = fname;
    this.lname = lname;
    this._username = username;
  }

  User.fromJson(Map json) {
    birthDate = json['birthDate'];
    fname = json['fname'];
    lname = json['lname'];
    _username = json['username'];
  }

  int getAge() {
    DateTime current = DateTime.now();
    return birthDate.year - current.year;
  }
}
