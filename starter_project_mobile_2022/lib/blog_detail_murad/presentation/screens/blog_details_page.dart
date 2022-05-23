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
        title: const Center(
            child: Text(
          'Article Detail',
          style: TextStyle(
            color: Color.fromARGB(255, 0, 0, 0),
            fontSize: 25,
            fontWeight: FontWeight.w100,
            height: 1.8,
          ),
        )),
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: const IconThemeData(
          color: Colors.black,
        ),
      ),
      body: SafeArea(
        minimum: const EdgeInsets.symmetric(vertical: 12),
        child: ListView(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
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
                  const Expanded(flex: 1, child: Icon(Icons.more_vert)),
                ],
              ),
            ),

            const Padding(
              padding: EdgeInsets.all(12.0),
              child: Text(
                "Title goes here",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 32,
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
                      width: 20,
                      height: 45,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Column(
                            children: [
                              Row(
                                children: const [
                                  Icon(Icons.star,
                                      size: 20, color: Colors.yellowAccent),
                                  Text('4.5'),
                                  Text(
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
                      width: 20,
                      height: 40,
                      child: StarBar(
                        width: 60,
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
                              offset: const Offset(0, 3),
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
                                  hintStyle: TextStyle(color: Colors.grey),
                                  border: InputBorder.none),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(width * 0.02),
                    decoration: BoxDecoration(
                      color: Colors.blueAccent,
                      borderRadius: BorderRadius.circular(width * 0.01),
                    ),
                    child: InkWell(
                      child: const Icon(
                        Icons.send,
                        color: Colors.white,
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
