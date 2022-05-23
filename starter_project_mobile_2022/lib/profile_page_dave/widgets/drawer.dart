import 'package:flutter/material.dart';

import '../presentation/constants/constants.dart';

class MainDrawer extends StatelessWidget {
  const MainDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // ignore: sized_box_for_blackspace

          Padding(
            padding: EdgeInsets.only(top: height * 0.06, left: height * 0.03),
            child: Container(
              height: height * 0.28,
              child: Column(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(height),
                    child: Image(
                        image: NetworkImage(
                          'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2018/12/IMG_9127.jpg?itok=156LUKD5',
                        ),
                        height: height * 0.13,
                        width: height * 0.17),
                  ),
                  SizedBox(
                    height: height * 0.01,
                  ),
                  Text(
                    "Nati B",
                    style: TextStyle(color: black, fontSize: height * 0.024),
                  ),
                  Text(
                    "UX Designer",
                    style: TextStyle(color: black, fontSize: height * 0.024),
                  ),
                  SizedBox(
                    height: 10.0,
                  ),
                  Text(
                    "nati@gmail.com",
                    style: TextStyle(color: black, fontSize: height * 0.018),
                  ),
                ],
              ),
            ),
          ),

          Expanded(
            child: Container(
              color: backgrd,
              child: Expanded(
                child: ListView(
                  children: [
                    ListTile(
                      onTap: () {
                        Navigator.pop(context);
                      },
                      leading: const Icon(
                        Icons.person,
                        color: white,
                      ),
                      title: const Text(
                        "Profile",
                        style: TextStyle(
                          color: white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    ListTile(
                      onTap: () {},
                      leading: const Icon(
                        Icons.settings,
                        color: white,
                      ),
                      title: const Text(
                        "Settings",
                        style: TextStyle(
                          color: white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    Divider(color: white),
                    ListTile(
                      onTap: () {},
                      leading: const Icon(
                        Icons.article_outlined,
                        color: white,
                      ),
                      title: const Text(
                        "Article",
                        style: TextStyle(
                          color: white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          Container(
            color: backgrd,
            child: ListTile(
              onTap: () {},
              leading: const Icon(
                Icons.logout,
                color: white,
              ),
              title: const Text(
                "Logout",
                style: TextStyle(
                  color: white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
