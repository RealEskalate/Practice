import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail/costants.dart/constants.dart';

class Tags extends StatelessWidget {
  final List? catagories;

  const Tags({
    Key? key,
    required this.catagories,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: catagories?.length,
        itemBuilder: (BuildContext context, int index) {
          return Text(
            catagories?[index],
            style: const TextStyle(
              color: blue,
            ),
          );
        });
  }
}
