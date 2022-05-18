import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_suha/constants/colors.dart';
import 'package:starter_project_mobile_2022/blog_suha/widgets/starBar.dart';

import 'circleIcon.dart';

class PostCard extends StatelessWidget {
  final double heigth;
  final double width;
  final double padding;

  final int numOfStars;

  final String title;
  final String description;
  final String created;
  final String numOfComments;

  final IconData icon;
  final IconData image;

  const PostCard(
      {Key? key,
      required this.heigth,
      required this.width,
      required this.title,
      required this.description,
      required this.created,
      required this.numOfComments,
      required this.icon,
      required this.image,
      required this.numOfStars,
      required this.padding})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(padding),
      margin: EdgeInsets.only(bottom: width * 0.03),
      height: heigth,
      width: width,
      decoration: BoxDecoration(
          boxShadow: [
            BoxShadow(
                color: Colors.grey.shade200, spreadRadius: 1, blurRadius: 5),
          ],
          color: Colors.white,
          borderRadius: BorderRadius.circular(width * 0.05)),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  CircleIcon(context, icon, width * 0.06),
                  SizedBox(
                    width: width * 0.02,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: TextStyle(
                            fontSize: width * 0.045,
                            fontWeight: FontWeight.bold),
                      ),
                      Text(
                        created,
                        style: const TextStyle(
                            color: Colors.grey, fontWeight: FontWeight.w300),
                      ),
                    ],
                  ),
                ],
              ),
              const Icon(
                Icons.more_vert,
                color: Colors.grey,
              )
            ],
          ),
          SizedBox(
            height: heigth * 0.02,
          ),
          Text(
            description,
            style: const TextStyle(fontWeight: FontWeight.w300),
          ),
          SizedBox(
            height: heigth * 0.02,
          ),
          Image(
              alignment: Alignment.center,
              fit: BoxFit.cover,
              height: heigth * 0.39,
              width: width * 1,
              image: const AssetImage('assets/mark.png')),
          SizedBox(
            height: heigth * 0.02,
          ),
          Row(
            children: [
              Text(
                numOfComments,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
              const Text(
                ' Comments',
              )
            ],
          ),
          Divider(
            thickness: width * 0.002, // thickness of the line
            color: Colors.grey, // The color to use when painting the line.
          ),
          Row(
            children: [
              Expanded(
                flex: 1,
                child: SizedBox(
                  width: width * 0.1,
                  height: heigth * 0.14,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.comment, size: width * 0.06),
                      Text('Comment', style: TextStyle(fontSize: width * 0.04)),
                    ],
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: SizedBox(
                    width: width * 0.1,
                    height: heigth * 0.14,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.star, size: width * 0.08, color: starYellow),
                        const Text('4.5'),
                      ],
                    )),
              ),
              Expanded(
                flex: 2,
                child: SizedBox(
                    width: width * 0.1,
                    height: heigth * 0.14,
                    child: StarBar(
                      width: width,
                      numOfStars: numOfStars,
                    )),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
