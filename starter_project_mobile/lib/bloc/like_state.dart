import 'package:flutter/material.dart';

class LikeState extends ChangeNotifier {
  bool _liked = false;

  getLiked() => _liked;
  changeLike() {
    _liked = !_liked;
    notifyListeners();
  }
}
