// ignore_for_file: prefer_const_literals_to_create_immutables

import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail/costants.dart/constants.dart';
import 'package:starter_project_mobile_2022/blog_detail/presentation/widgets/article_detail.dart';
import 'package:starter_project_mobile_2022/blog_detail/presentation/widgets/comment_diaplay.dart';
import 'package:starter_project_mobile_2022/blog_detail/presentation/widgets/send_comment.dart';
import 'package:starter_project_mobile_2022/blog_detail/presentation/widgets/tags.dart';

import '../../../list_blog_page/widgets/star_bar.dart';

// ignore: use_key_in_widget_constructors
class PostDetailpage extends StatelessWidget {
  static const routeName = 'postdetail';
  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: white,
      appBar: AppBar(
        backgroundColor: white,
        leading: Transform.scale(
          scale: 0.7,
          child: ElevatedButton(
            child: Icon(
              Icons.arrow_back_ios_new,
              size: width * 0.08,
            ),
            onPressed: () {
              Navigator.pop(context);
            },
            style: ElevatedButton.styleFrom(
              primary: backgroungOfBackButton,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20), // <-- Radius
              ),
            ),
          ),
        ),
        title: Text(
          'Article Detail',
          style: TextStyle(color: black, fontSize: height * 0.033),
        ),
        centerTitle: true,
      ),
      body: NotificationListener<OverscrollIndicatorNotification>(
        onNotification: (overScroll) {
          overScroll.disallowIndicator();
          return false;
        },
        child: SafeArea(
          minimum: const EdgeInsets.symmetric(vertical: 0),
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
              Padding(
                padding: EdgeInsets.all(width * 0.02),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      '#business',
                      style: TextStyle(
                        color: Colors.blue,
                        fontSize: height * 0.022,
                      ),
                    ),
                    SizedBox(
                      width: width * 0.05,
                    ),
                    Text(
                      '#Tech',
                      style: TextStyle(
                        color: Colors.blue,
                        fontSize: height * 0.022,
                      ),
                    ),
                  ],
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
                        height: height * 0.06,
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
                          width: width * 1,
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

              const CommentWidget(
                  authorName: 'Barry Dowson',
                  date: 'Dec 10, 2022',
                  givenIcon: Icons.person,
                  comments:
                      'Since executives disclosed the fall in February, the firm\'s share price has nearly halved.But hope things turnout fine.'),
              // send  comment widget
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: SendComment(heigth: height * 0.07, width: width),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
