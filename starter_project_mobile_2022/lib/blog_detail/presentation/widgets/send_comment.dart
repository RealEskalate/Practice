import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail/presentation/widgets/send_icon.dart';
import 'package:starter_project_mobile_2022/list_blog_page/constants/colors.dart';

class SendComment extends StatelessWidget {
  final double heigth;
  final double width;

  const SendComment({Key? key, required this.heigth, required this.width})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: heigth,
        width: width,
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(color: grey2, spreadRadius: 1, blurRadius: width * 0.01),
        ], color: white, borderRadius: BorderRadius.circular(width * 0.03)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Flexible(
              flex: 6,
              child: Padding(
                padding: EdgeInsets.only(left: width * 0.04),
                child: const TextField(
                  decoration:
                      InputDecoration.collapsed(hintText: 'Write a comment'),
                ),
              ),
            ),
            Expanded(
                flex: 1,
                child: SendIcon(heigth: heigth * 1, width: width * 0.1)),
            // const Icon(Icons.search)
          ],
        ));
  }
}
