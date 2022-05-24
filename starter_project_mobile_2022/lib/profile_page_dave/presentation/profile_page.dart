import 'package:flutter/material.dart';

import '../widgets/drawer.dart';
import '../widgets/postCard.dart';
import 'constants/constants.dart';

class ProfilePage extends StatefulWidget {
  static const routeName = 'ProfilePage';
  const ProfilePage({Key? key}) : super(key: key);

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height * 0.45;
    double width = MediaQuery.of(context).size.width;

    return Scaffold(
      key: scaffoldKey,
      drawer: Container(
          width: width * 0.6,
          child: const Opacity(
            opacity: 0.9,
            child: Drawer(
              child: MainDrawer(),
            ),
          )),
      backgroundColor: backgroundColor,
      body: Column(children: [
        Container(
          margin: EdgeInsets.only(top: height * 0.1, bottom: height * 0.01),
          padding: EdgeInsets.only(left: height * 0.045, right: height * 0.1),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  IconButton(
                      icon: Icon(
                        Icons.menu,
                        size: width * 0.07,
                      ),
                      onPressed: () {
                        scaffoldKey.currentState!.openDrawer();
                      }),
                  Padding(
                    padding: EdgeInsets.only(left: height * 0.03),
                    child: Text(
                      "Profile",
                      style: TextStyle(
                        fontSize: height * 0.054,
                        color: black,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
              Center(
                child: IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.more_horiz),
                ),
              ),
            ],
          ),
        ),
        _buildHeaderWidget(
          height: height,
          width: width,
        ),
        Expanded(
          child: Container(
            margin: EdgeInsets.only(
                top: height * 0.12,
                left: height * 0.025,
                right: height * 0.035),
            height: height * 0.45,
            width: width,
            decoration: BoxDecoration(
              color: white,
              boxShadow: [
                BoxShadow(
                    color: shadow,
                    blurRadius: height * 0.04,
                    offset: Offset(0, height * 0.007)),
              ],
              borderRadius: BorderRadius.circular(height * 0.1),
            ),
            child: Column(
              children: [
                Padding(
                  padding: EdgeInsets.only(
                      left: height * 0.1,
                      right: height * 0.2,
                      top: height * 0.05),
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          children: [
                            Text("MY",
                                style: TextStyle(
                                    fontSize: height * 0.056,
                                    color: black,
                                    fontWeight: FontWeight.bold)),
                            Text("Posts",
                                style: TextStyle(
                                    fontSize: height * 0.056,
                                    color: black,
                                    fontWeight: FontWeight.bold)),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            const Icon(
                              Icons.grid_view,
                              color: blue,
                            ),
                            SizedBox(width: height * 0.09),
                            Icon(
                              Icons.toc,
                              color: black,
                              size: height * 0.08,
                            ),
                          ],
                        ),
                      ]),
                ),
                Expanded(
                  flex: 1,
                  child: ListView(
                    children: const <Widget>[
                      PostReviewCard(
                        title: "Big data",
                        subtitle:
                            "Why big data suhakjjljklkvhgfhjhgkhhjgkjhgkjgkjghjhgkjgfhfhgh",
                        created: "1 hr ago",
                        imageURL:
                            "https://miro.medium.com/max/645/1*QSDBne0uwCD7chzSt6EvKQ.jpeg",
                      ),
                      PostReviewCard(
                        title: "UX Design",
                        subtitle: "step design sprint for UX beginner",
                        created: "2 hrs ago",
                        imageURL:
                            "https://thisisglance.com/wp-content/uploads/2020/03/10-what-is-ux-design.jpg",
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ]),
    );
  }
}

class _buildHeaderWidget extends StatelessWidget {
  const _buildHeaderWidget({
    Key? key,
    required this.height,
    required this.width,
  }) : super(key: key);

  final double height;
  final double width;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height / 1.5,
      width: width,
      margin: EdgeInsets.only(left: height * 0.04, right: height * 0.04),
      padding: EdgeInsets.only(
          left: height * 0.08,
          right: height * 0.08,
          top: height * 0.07,
          bottom: 0),
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
              color: shadow,
              blurRadius: height * 0.04,
              offset: Offset(0, height * 0.007)),
        ],
        borderRadius: BorderRadius.circular(height * 0.05),
        color: white,
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding:
                    EdgeInsets.only(left: height * 0.1, top: height * 0.05),
                child: Stack(children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(height * 0.07),
                    child: Image.network(
                        "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2018/12/IMG_9127.jpg?itok=156LUKD5",
                        loadingBuilder: (BuildContext context, Widget child,
                            ImageChunkEvent? loadingProgress) {
                      if (loadingProgress == null) {
                        return child;
                      }
                      return Center(
                        child: CircularProgressIndicator(
                          value: loadingProgress.expectedTotalBytes != null
                              ? loadingProgress.cumulativeBytesLoaded /
                                  loadingProgress.expectedTotalBytes!
                              : null,
                        ),
                      );
                    },
                        fit: BoxFit.cover,
                        width: width * 0.28,
                        height: height * 0.3),
                  ),
                  Padding(
                    padding: EdgeInsets.only(
                        left: height * 0.23, top: height * 0.24),
                    child: Positioned(
                      bottom: 0,
                      right: height * 0.001,
                      child: buildEditIcon(edit_color),
                    ),
                  ),
                ]),
              ),
              SizedBox(width: height * 0.08),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Nati B',
                    maxLines: 1,
                    style: TextStyle(
                      fontSize: width * 0.05,
                      color: black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text('UX designer', maxLines: 1),
                ],
              )
            ],
          ),
          Padding(
            padding: EdgeInsets.only(bottom: width * 0.08),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text("About me", maxLines: 1),
                    Text("I’m a a software engineer and UX designer",
                        maxLines: 1, overflow: TextOverflow.ellipsis),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}

Widget buildEditIcon(Color color) => buildCircle(
      color: white,
      all: 3,
      child: buildCircle(
        color: color,
        all: 8,
        child: const Icon(
          Icons.edit,
          color: white,
          size: 10,
        ),
      ),
    );
Widget buildCircle({
  required Widget child,
  required double all,
  required Color color,
}) =>
    ClipOval(
      child: Container(
        padding: EdgeInsets.all(all),
        color: color,
        child: child,
      ),
    );
