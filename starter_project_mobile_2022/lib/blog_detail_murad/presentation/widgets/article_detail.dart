import 'package:flutter/material.dart';

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
          padding: EdgeInsets.all(width * 0.05),
          child: RichText(
            text: TextSpan(
              children: [
                TextSpan(
                    text: article.substring(0, 1).toUpperCase(),
                    style:
                        TextStyle(color: Colors.black, fontSize: width * 0.05)),
                TextSpan(
                  text: article.substring(1),
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: width * 0.03,
                    height: height * 0.0025,
                    wordSpacing: 2,
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
