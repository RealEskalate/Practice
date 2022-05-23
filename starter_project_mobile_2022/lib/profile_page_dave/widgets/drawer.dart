import 'package:flutter/material.dart';

import '../presentation/constants/constants.dart';

class MainDrawer extends StatelessWidget {
  const MainDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Container(
          height: height * 0.35,
          child: DrawerHeader(
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
                  height: height * 0.04,
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
          child: ListView(
            children: [
              ListTile(
                onTap: () {},
                leading: const Icon(
                  Icons.person,
                  color: black,
                ),
                title: const Text(
                  "Profile",
                  style: TextStyle(
                    color: black,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                onTap: () {},
                leading: const Icon(
                  Icons.settings,
                  color: black,
                ),
                title: const Text(
                  "Settings",
                  style: TextStyle(
                    color: black,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                onTap: () {},
                leading: const Icon(
                  Icons.article_outlined,
                  color: black,
                ),
                title: const Text(
                  "Article",
                  style: TextStyle(
                    color: black,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ),
        Container(
          child: ListTile(
            onTap: () {},
            leading: const Icon(
              Icons.logout,
              color: black,
            ),
            title: const Text(
              "Logout",
              style: TextStyle(
                color: black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        )
      ],
    );
  }
}
