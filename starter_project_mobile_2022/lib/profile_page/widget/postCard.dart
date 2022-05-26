import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/profile_page/constants/colors.dart';

class PostReviewCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final String created;
  final String imageURL;

  const PostReviewCard({
    Key? key,
    required this.title,
    required this.subtitle,
    required this.created,
    required this.imageURL,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height * 0.45;
    double width = MediaQuery.of(context).size.width;
    return Container(
      margin: EdgeInsets.only(
        left: height * 0.06,
        right: height * 0.02,
        bottom: 20,
      ),
      height: height * 0.5,
      width: width,
      decoration: BoxDecoration(
          color: white,
          boxShadow: [
            BoxShadow(
                color: shadow,
                blurRadius: height * 0.01,
                offset: Offset(0, height * 0.007)),
          ],
          borderRadius: BorderRadius.circular(height * 0.03)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(
            flex: 2,
            child: ClipRRect(
                borderRadius: BorderRadius.circular(height * 0.04),
                child: Image(
                  alignment: Alignment.center,
                  fit: BoxFit.cover,
                  height: height * 0.5,
                  width: width * 0.3,
                  image: NetworkImage(
                    imageURL,
                  ),
                )),
          ),
          SizedBox(width: width * 0.05),
          Expanded(
            flex: 3,
            child: Column(
              children: [
                SizedBox(
                  height: height * 0.04,
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: TextStyle(
                          fontSize: height * 0.05,
                          fontWeight: FontWeight.bold,
                          color: Blue),
                    ),
                    SizedBox(
                      height: height * 0.011,
                    ),
                    SizedBox(
                      width: width * 0.4,
                      height: height * 0.11,
                      child: Text(
                        subtitle,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                            fontSize: width * 0.04,
                            fontWeight: FontWeight.normal,
                            color: black),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: height * 0.19,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.punch_clock_rounded, color: darkBlue),
                    Text(
                      created,
                      style:
                          TextStyle(fontSize: height * 0.04, color: darkBlue),
                    ),
                    Padding(
                      padding: EdgeInsets.only(left: height * 0.11),
                      child: const Icon(Icons.bookmark, color: blue),
                    ),
                  ],
                )
              ],
            ),
          ),
          Expanded(
            flex: 1,
            child: Align(
              alignment: Alignment.topRight,
              child: PopupMenuButton(
                  shape: OutlineInputBorder(
                      borderSide:
                          BorderSide(color: grey, width: height * 0.0001)),
                  itemBuilder: (BuildContext context) => <PopupMenuEntry>[
                        const PopupMenuItem(
                          child: ListTile(
                            leading: Icon(Icons.edit_note_outlined),
                            title: Text('Edit',
                                style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                        ),
                        const PopupMenuItem(
                          child: ListTile(
                            leading: Icon(Icons.delete_outline_sharp),
                            title: Text('Delete',
                                style: TextStyle(fontWeight: FontWeight.bold)),
                          ),
                        ),
                      ]),
            ),
          )
        ],
      ),
    );
  }
}
