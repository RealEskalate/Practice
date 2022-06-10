import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail/costants.dart/constants.dart';

class SendIcon extends StatelessWidget {
  final double heigth;
  final double width;

  const SendIcon({Key? key, required this.heigth, required this.width})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: heigth,
      width: width,
      decoration: BoxDecoration(
          color: iconBackgroundColor,
          borderRadius: BorderRadius.circular(width * 0.2)),
      child: IconButton(
          iconSize: width * 0.6,
          color: white,
          icon: const Icon(sendIcon),
          onPressed: () => {}),
    );
  }
}
