import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_suha/constants/colors.dart';
import 'package:starter_project_mobile_2022/blog_suha/widgets/postCard.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: mainBackground,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            PostCard(
              created: '2d ago',
              description:
                  'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
              heigth: height * 0.4,
              width: width * 0.93,
              padding: 10,
              icon: Icons.person,
              image: Icons.texture_sharp,
              numOfComments: '16',
              numOfStars: 4,
              title: 'Adrian Smith',
            ),
            const SizedBox(height: 12),
            PostCard(
              created: '2d ago',
              description:
                  'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
              heigth: height * 0.4,
              width: width * 0.93,
              padding: 10,
              icon: Icons.person,
              image: Icons.texture_sharp,
              numOfComments: '16',
              numOfStars: 4,
              title: 'Adrian Smith',
            ),
          ],
        ),
      ),
    );
  }
}
