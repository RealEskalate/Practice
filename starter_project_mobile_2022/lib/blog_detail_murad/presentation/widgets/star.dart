import 'package:flutter/material.dart';

// ignore: non_constant_identifier_names
Widget Star(BuildContext context, double width, Color color) {
  return SizedBox(
    width: width,
    child: IconButton(
      icon: const Icon(Icons.star),
      color: color,
      onPressed: () {},
    ),
  );
}
