import 'package:flutter/material.dart';
import '../constants/colors.dart';
import 'search_icon.dart';

class SearchBar extends StatelessWidget {
  final double heigth;
  final double width;

  const SearchBar({Key? key, required this.heigth, required this.width})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: heigth,
        width: width,
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(color: grey2, spreadRadius: 1, blurRadius: width * 0.01),
        ], color: white, borderRadius: BorderRadius.circular(width * 0.03)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Flexible(
              flex: 6,
              child: Padding(
                padding: EdgeInsets.only(left: width * 0.04),
                child: const TextField(
                  decoration: InputDecoration.collapsed(
                      hintText: 'Search an article...'),
                ),
              ),
            ),
            Expanded(
                flex: 1,
                child: SearchIcon(heigth: heigth * 1, width: width * 0.1)),
            // const Icon(Icons.search)
          ],
        ));
  }
}
