import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/costants.dart/constants.dart';
import 'package:google_fonts/google_fonts.dart';

class CommentWidget extends StatelessWidget {
  const CommentWidget({
    Key? key,
    required this.authorName,
    required this.date,
    required this.givenIcon,
    required this.comments,
  }) : super(key: key);

  final String authorName;
  final String date;
  final IconData givenIcon;
  final String comments;
  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;
    final double height = MediaQuery.of(context).size.height;
    return Padding(
      padding: EdgeInsets.all(width * 0.05),
      child: Container(
        padding: EdgeInsets.all(width * 0.02),
        decoration: BoxDecoration(
            color: backgroundColorCommentDisplay,
            borderRadius: BorderRadius.all(Radius.circular(width * 0.02))),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(flex: 1, child: Icon(givenIcon)),
                Expanded(
                  flex: 10,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(authorName,
                          style: const TextStyle(fontWeight: FontWeight.w800)),
                      Text(date,
                          style: GoogleFonts.poppins(
                              textStyle: TextStyle(
                                  height: height * 0.003,
                                  fontWeight: FontWeight.w200,
                                  color: commentDateColor)))
                    ],
                  ),
                ),
                const Expanded(
                    flex: 1, child: InkWell(child: Icon(threeDotsIcon))),
              ],
            ),
            Row(children: [
              Expanded(flex: 1, child: Container()),
              Expanded(
                  flex: 10,
                  child: Text(comments,
                      style: GoogleFonts.poppins(
                          textStyle: TextStyle(
                        fontWeight: FontWeight.w500,
                        height: height * 0.002,
                      )))),
              Expanded(flex: 1, child: Container())
            ]),
          ],
        ),
      ),
    );
  }
}
