// ignore_for_file: prefer_const_literals_to_create_immutables

import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/costants.dart/constants.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/presentation/widgets/article_detail.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/presentation/widgets/comment_diaplay.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/presentation/widgets/starBar.dart';

class PostDetailpage extends StatelessWidget {
  static const routeName = 'postdetail';
  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Center(
            child: Text(
          'Article Detail',
          style: TextStyle(
            color: black,
            fontSize: width * 0.05,
            fontWeight: FontWeight.w500,
            height: height * 0.0025,
          ),
        )),
        backgroundColor: transparent,
        elevation: 0,
        iconTheme: const IconThemeData(
          color: black,
        ),
      ),
      body: SafeArea(
        minimum: EdgeInsets.symmetric(vertical: width * 0.05),
        child: ListView(
          children: [
            Padding(
              padding: EdgeInsets.all(width * 0.05),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  const Expanded(flex: 1, child: Icon(Icons.person)),
                  Expanded(
                    flex: 10,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Adrian Smith',
                            style: TextStyle(fontWeight: FontWeight.w800)),
                        Text('Dec 12 1999')
                      ],
                    ),
                  ),
                  const Expanded(flex: 1, child: Icon(threeDotsIcon)),
                ],
              ),
            ),

            Padding(
              padding: EdgeInsets.all(width * 0.05),
              child: Text(
                "Title goes here",
                style: TextStyle(
                  color: black,
                  fontSize: height * 0.05,
                ),
              ),
            ),

            const ArticleDetail(
              article:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              image: 'assets/image.jpg',
            ),

            // rating star widget

            Row(
              children: [
                Expanded(
                  flex: 1,
                  child: SizedBox(
                      width: width * 0.02,
                      height: height * 0.05,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Column(
                            children: [
                              Row(
                                children: [
                                  Icon(starIcon,
                                      size: height * 0.03, color: starYellow),
                                  const Text('4.5'),
                                  const Text(
                                    '/5',
                                    style: TextStyle(
                                      fontFeatures: [
                                        FontFeature.enable('subs'),
                                      ],
                                    ),
                                  )
                                ],
                              ),
                              const Text("Rate this article")
                            ],
                          ),
                        ],
                      )),
                ),
                Expanded(
                  flex: 2,
                  child: SizedBox(
                      width: width * 0.10,
                      height: height * 0.1,
                      child: StarBar(
                        width: width * 0.125,
                        numOfStars: 2,
                      )),
                ),
              ],
            ),

            Padding(
              padding: EdgeInsets.all(width * 0.01),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Divider(color: black),
                  SizedBox(
                    height: height * 0.01,
                  ),
                  // comment header
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: const [
                      Expanded(flex: 1, child: Text('16 Comments')),
                      Expanded(flex: 3, child: Text('Comments')),
                    ],
                  ),
                ],
              ),
            ),

            // comment widget
            const CommentWidget(
                authorName: 'Barry Dowson',
                date: 'Dec 10, 2022',
                givenIcon: Icons.person,
                comments:
                    'Since executives disclosed the fall in February, the firm\'s share price has nearly halved.But hope things turnout fine.'),
            // send  comment widget
            Container(
              margin: EdgeInsets.all(width * 0.05),
              height: height * 0.12,
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      padding: EdgeInsets.only(left: width * 0.05),
                      decoration: BoxDecoration(
                        color: white,
                        borderRadius: BorderRadius.circular(width * 0.005),
                        boxShadow: [
                          BoxShadow(
                              offset: Offset(0, width * 0.001),
                              blurRadius: width * 0.005,
                              color: grey)
                        ],
                      ),
                      child: Row(
                        children: const [
                          Expanded(
                            child: TextField(
                              decoration: InputDecoration(
                                  hintText: "Write a comment.",
                                  hintStyle: TextStyle(color: grey),
                                  border: InputBorder.none),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(width * 0.03),
                    decoration: BoxDecoration(
                      color: sendButtonColor,
                      borderRadius: BorderRadius.circular(width * 0.01),
                    ),
                    child: InkWell(
                      child: const Icon(
                        sendIcon,
                        color: white,
                      ),
                      onLongPress: () {},
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
