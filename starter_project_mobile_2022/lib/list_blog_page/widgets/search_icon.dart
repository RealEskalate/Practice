import 'package:flutter/material.dart';
import '../constants/colors.dart';

class SearchIcon extends StatelessWidget {
  final double heigth;
  final double width;

  const SearchIcon({Key? key, required this.heigth, required this.width})
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
          icon: const Icon(Icons.search),
          onPressed: () => {}),
    );
  }
}
