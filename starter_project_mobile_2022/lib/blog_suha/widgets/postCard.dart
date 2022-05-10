import 'package:flutter/material.dart';

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
      height: heigth,
      width: width,
      decoration: BoxDecoration(boxShadow: [
        BoxShadow(color: Colors.grey.shade200, spreadRadius: 1, blurRadius: 5),
      ], color: Colors.white, borderRadius: BorderRadius.circular(20)),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  CircleIcon(context, icon),
                  const SizedBox(width: 10),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: const TextStyle(
                            fontSize: 18, fontWeight: FontWeight.bold),
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
          const SizedBox(
            height: 10,
          ),
          const Image(
              alignment: Alignment.center,
              fit: BoxFit.cover,
              height: 130,
              width: 400,
              image: AssetImage('assets/mark.png')),
          const SizedBox(
            height: 8,
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
          const Divider(
            thickness: 0.5, // thickness of the line
            color: Colors.grey, // The color to use when painting the line.
          ),
          Row()
        ],
      ),
    );
  }
}
