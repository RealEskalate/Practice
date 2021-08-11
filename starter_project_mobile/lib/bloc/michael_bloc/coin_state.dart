import 'package:flutter/material.dart';

class CoinState extends ChangeNotifier {
  int _coin = 0;

  getCoin() => _coin;
  addCoin() {
    _coin = _coin + 1;
    notifyListeners();
  }
  resetCoin(){
    _coin =0;
    notifyListeners();
  }
}
