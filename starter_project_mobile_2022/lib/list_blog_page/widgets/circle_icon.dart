import 'package:flutter/material.dart';

class CircleIcon extends StatelessWidget {
  final IconData icon;
  final double? radius;
  final double? iconSize;
  final Color iconBackground;

  const CircleIcon(
    double d, {
    Key? key,
    required this.icon,
    required this.radius,
    required this.iconBackground,
    required this.iconSize,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius,
      backgroundColor: iconBackground,
      child: Icon(
        icon,
        size: iconSize,
        color: Colors.white,
      ),
    );
  }
}
