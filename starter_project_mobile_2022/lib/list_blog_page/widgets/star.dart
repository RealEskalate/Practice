import 'package:flutter/material.dart';

Widget Star(BuildContext context, double width, Color color) {
  return SizedBox(
    width: width * 0.08,
    child: IconButton(
      icon: const Icon(Icons.star),
      color: color,
      onPressed: () {},
    ),
  );
}
