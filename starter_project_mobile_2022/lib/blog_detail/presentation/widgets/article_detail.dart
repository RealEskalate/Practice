import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail/costants.dart/constants.dart';

class ArticleDetail extends StatelessWidget {
  const ArticleDetail({
    Key? key,
    required this.image,
    required this.article,
  }) : super(key: key);
  final String image;
  final String article;

  // final IconData givenIcon;
  // final String comments;
  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final double height = MediaQuery.of(context).size.height;
    return Column(
      children: [
        Image(width: width, image: AssetImage(image)),
        Padding(
          padding: EdgeInsets.all(width * 0.02),
          child: RichText(
            text: TextSpan(
              children: [
                TextSpan(
                    text: article.substring(0, 1).toUpperCase(),
                    style: TextStyle(color: black, fontSize: width * 0.09)),
                TextSpan(
                  text: article.substring(1),
                  style: TextStyle(
                    color: black,
                    fontSize: width * 0.05,
                    height: height * 0.002,
                    wordSpacing: width * 0.01,
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
