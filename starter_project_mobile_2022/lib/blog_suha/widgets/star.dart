import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_suha/constants/colors.dart';

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
