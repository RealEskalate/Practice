import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_suha/widgets/searchIcon.dart';

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
        decoration: BoxDecoration(
            boxShadow: [
              BoxShadow(
                  color: Colors.grey.shade200, spreadRadius: 1, blurRadius: 5),
            ],
            color: Colors.white,
            borderRadius: BorderRadius.circular(width * 0.03)),
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
