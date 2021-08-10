import 'package:flutter/material.dart';

class CountState extends ChangeNotifier {
  int _count = 0;

  getCount() => _count;
  increament() {
    _count = _count + 1;
    notifyListeners();
  }
}
