import 'package:flutter/material.dart';

class DividerLine extends StatelessWidget {
  final double thickness;
  final Color color;

  const DividerLine({
    Key? key,
    required this.thickness,
    required this.color,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Divider(
      thickness: thickness, // thickness of the line
      color: color, // The color to use when painting the line.
    );
  }
}
