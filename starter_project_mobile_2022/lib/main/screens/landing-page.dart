import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import '../screens/page.dart';

class MYlanding extends StatelessWidget {
  final _contorller = PageController();
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
                    textDirection: TextDirection.rtl,
                    effect: ExpandingDotsEffect(
                      activeDotColor: Colors.blue,
                      dotColor: Colors.deepPurple.shade100,
                      dotHeight: 8,
                      dotWidth: 8,
                      spacing: 8,
                    ),
                  ),
                  SizedBox(width: 5),
                  Container(
                    width: 88,
                    height: 60,
                    decoration: BoxDecoration(
                        color: Colors.blue,
                        borderRadius: BorderRadius.circular(16)),
                    child: GestureDetector(
                      onTap: () => Navigator.pushNamed(context, 'LoginScreen'),
                      child: Icon(
                        Icons.arrow_forward_sharp,
                        size: 50,
                        color: Colors.white,
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
