import 'package:flutter/material.dart';

import '../constants/colors.dart';

Widget CircleIcon(BuildContext context, IconData icon, double? radius) {
  return CircleAvatar(
    radius: radius,
    backgroundColor: iconBackgroundColor,
    child: Icon(
      icon,
      size: 30,
      color: Colors.white,
    ),
  );
}
