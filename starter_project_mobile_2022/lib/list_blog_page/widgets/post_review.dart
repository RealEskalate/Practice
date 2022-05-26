import 'package:flutter/material.dart';
import '../constants/colors.dart';

class PostReviewCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final String created;
  final String imageURL;

  final double heigth;
  final double width;
  final double padding;

  const PostReviewCard(
      {Key? key,
      required this.title,
      required this.subtitle,
      required this.created,
      required this.imageURL,
      required this.heigth,
      required this.width,
      required this.padding})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(padding),
      margin: EdgeInsets.only(
          left: width * 0.03, right: width * 0.03, top: width * 0.03),
      height: heigth,
      width: width,
      decoration: BoxDecoration(boxShadow: [
        BoxShadow(color: grey2, spreadRadius: 1, blurRadius: width * 0.01),
      ], color: white, borderRadius: BorderRadius.circular(width * 0.05)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image(
              alignment: Alignment.center,
              fit: BoxFit.cover,
              height: heigth * 1,
              width: width * 0.4,
              image: const AssetImage('assets/mark.png')),
          SizedBox(
            height: heigth * 0.02,
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                        fontSize: width * 0.05,
                        fontWeight: FontWeight.bold,
                        color: tagBackgroundColor),
                  ),
                  SizedBox(
                    height: heigth * 0.05,
                  ),
                  Text(
                    subtitle,
                    style: TextStyle(
                        fontSize: width * 0.04,
                        fontWeight: FontWeight.normal,
                        color: Colors.grey.shade800),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.punch_clock_rounded),
                  Text(
                    created,
                    style: const TextStyle(
                        fontSize: 15, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    width: width * 0.015,
                  ),
                ],
              )
            ],
          ),
          const Icon(Icons.more_vert),
        ],
      ),
    );
  }
}
