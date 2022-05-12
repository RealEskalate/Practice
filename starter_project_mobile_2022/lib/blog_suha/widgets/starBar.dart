import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_suha/constants/colors.dart';
import 'package:starter_project_mobile_2022/blog_suha/widgets/star.dart';

class StarBar extends StatefulWidget {
  late double width;
  final int numOfStars;

  StarBar({
    Key? key,
    required this.width,
    required this.numOfStars,
  }) : super(key: key);

  @override
  State<StarBar> createState() => _StarBarState();
}

class _StarBarState extends State<StarBar> {
  @override
  Widget build(BuildContext context) {
    return buildStarBar(context, widget.width, widget.numOfStars);
  }
}

Widget buildStarBar(BuildContext context, double width, int numOfStars) {
  return ListView.builder(
      itemCount: 5,
      scrollDirection: Axis.horizontal,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (BuildContext context, int index) {
        return Row(
          children: [
            if (index < numOfStars)
              Star(context, width, starYellow)
            else
              Star(context, width, grey),
          ],
        );
      });
}
