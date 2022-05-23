import 'package:flutter/material.dart';

class Star extends StatelessWidget {
  final double width;
  final Color color;

  const Star({
    Key? key,
    required this.width,
    required this.color,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width * 0.08,
      child: IconButton(
        icon: const Icon(Icons.star),
        color: color,
        onPressed: () {},
      ),
    );
  }
}
