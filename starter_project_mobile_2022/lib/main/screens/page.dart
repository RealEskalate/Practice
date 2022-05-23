import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
export 'page.dart';
import '../pallete.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import '../screens/page.dart';

class Myslider extends StatelessWidget {
  final _contorller = PageController();
  @override
  Widget build(BuildContext context) {
    double total = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('Carousel Slider'),
      // ),
      body: Container(
        margin: EdgeInsets.all(height * 125 / 10000),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Flexible(
              child: Center(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Expanded(
                      flex: 3,
                      child: Card(
                          elevation: height * 5 / 100,
                          margin: EdgeInsets.all(height * 125 / 10000),
                          shape: RoundedRectangleBorder(
                            borderRadius:
                                BorderRadius.circular(height * 25 / 1000),
                          ),
                          child: ClipRRect(
                            borderRadius:
                                BorderRadius.circular(height * 25 / 1000),
                            child: Image.asset('assets/images/elon.jpg',
                                fit: BoxFit.cover),
                          )),
                    ),
                    Expanded(
                      flex: 6,
                      child: Card(
                          elevation: height * 5 / 100,
                          margin: EdgeInsets.all(height * 125 / 10000),
                          shape: RoundedRectangleBorder(
                            borderRadius:
                                BorderRadius.circular(height * 25 / 1000),
                          ),
                          child: ClipRRect(
                            borderRadius:
                                BorderRadius.circular(height * 25 / 1000),
                            child: Image.asset(
                              'assets/images/virtual.webp',
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                  ],
                ),
              ),
            ),
            Flexible(
              child: Center(
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Expanded(
                      flex: 6,
                      child: Card(
                          elevation: height * 5 / 100,
                          margin: EdgeInsets.all(height * 125 / 10000),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(24.0),
                          ),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(24),
                            child: Image.asset(
                                'assets/images/Donald-Trump.webp',
                                fit: BoxFit.cover),
                          )),
                    ),
                    Expanded(
                      flex: 3,
                      child: Card(
                          elevation: height * 5 / 100,
                          margin: EdgeInsets.all(height * 125 / 10000),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(24.0),
                          ),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(24.0),
                            child: Image.asset(
                              'assets/images/sea.jpg',
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                  ],
                ),
              ),
            ),
            Flexible(
              child: Center(
                child: Text(
                  'Read the article you want instantly',
                  style: TextStyle(
                      color: black,
                      fontSize: total / 15,
                      fontWeight: FontWeight.w900),
                ),
              ),
            ),
            Flexible(
              child: Center(
                child: Text(
                  'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
                  style: TextStyle(
                    color: bb,
                    fontSize: total / 26,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
