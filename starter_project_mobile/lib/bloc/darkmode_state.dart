import 'package:flutter/material.dart';

class DarkModeState extends ChangeNotifier {
  bool _dark = false;

  getDarkMode() => _dark;
  changeLike() {
    _dark = !_dark;
    notifyListeners();
  }
}
