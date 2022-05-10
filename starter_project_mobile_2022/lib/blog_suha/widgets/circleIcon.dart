import 'package:flutter/material.dart';

Widget CircleIcon(BuildContext context, IconData icon) {
  return CircleAvatar(
    radius: 20,
    backgroundColor: Colors.blueAccent,
    child: Icon(
      icon,
      size: 30,
    ),
  );
}
