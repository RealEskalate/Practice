import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import 'package:starter_project_mobile_2022/main/pallete.dart';
import '../screens/page.dart';

class MYlanding extends StatefulWidget {
  @override
  State<MYlanding> createState() => _MYlandingState();
}

class _MYlandingState extends State<MYlanding> {
  final _contorller = PageController();
  // _contorller.

  @override
  Widget build(BuildContext context) {
    double total = MediaQuery.of(context).size.width;
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('Carousel Slider'),
      // ),
      body: Container(
        margin: EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            SizedBox(
              height: 500,
              width: total * 1,
              child: PageView(
                controller: _contorller,
                children: [
                  Myslider(),
                  Myslider(),
                  Myslider(),
                  Myslider(),
                ],
              ),
            ),
            Center(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SmoothPageIndicator(
                    controller: _contorller, // PageController
                    count: 4,

                    // forcing the indicator to use a specific direction
                    textDirection: TextDirection.ltr,
                    effect: ExpandingDotsEffect(
                      activeDotColor: blue,
                      dotColor: depPurple,
                      dotHeight: 8,
                      dotWidth: 8,
                      spacing: 8,
                    ),
                  ),
                  SizedBox(width: total / 30),
                  Container(
                    width: 78,
                    height: 50,
                    decoration: BoxDecoration(
                        color: blue, borderRadius: BorderRadius.circular(16)),
                    child: GestureDetector(
                      onTap: () => Navigator.pushNamed(context, 'LoginScreen'),
                      child: Icon(
                        Icons.arrow_forward_sharp,
                        size: total / 15,
                        color: kWhite,
                      ),
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
