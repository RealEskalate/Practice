import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/profile_page/Presentation/Profile_Page.dart';
import '../../add_blog/presentation/add_blog.dart';
import '../constants/colors.dart';

import '../widgets/circle_icon.dart';
import '../widgets/divider_line.dart';

class DrawerSection extends StatelessWidget {
  const DrawerSection({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Drawer(
      backgroundColor: drawerBackground,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            children: [
              SizedBox(
                width: width,
                child: DrawerHeader(
                  padding: EdgeInsets.all(width * 0.06),
                  decoration: BoxDecoration(color: white),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      CircleIcon(
                        width,
                        icon: Icons.person,
                        iconBackground: iconBackgroundColor,
                        iconSize: width * 0.06,
                        radius: width * 0.06,
                      ),
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Text(
                        'Adrian Smith',
                        style: TextStyle(
                            fontSize: width * 0.045,
                            fontWeight: FontWeight.bold),
                      ),
                      const Text(
                        'UI/UX Designer',
                        style: TextStyle(fontWeight: FontWeight.w300),
                      ),
                      const Text(
                        'adrian.smith@gmail.com',
                        style: TextStyle(fontWeight: FontWeight.w300),
                      ),
                    ],
                  ),
                ),
              ),
              ListTile(
                leading: CircleIcon(
                  width,
                  icon: Icons.person,
                  iconBackground: transparent,
                  iconSize: width * 0.075,
                  radius: width * 0.06,
                ),
                title: Text(
                  'Profile',
                  style: TextStyle(color: white, fontWeight: FontWeight.w400),
                ),
                onTap: () {
                  closeDrawer(context);
                  if (ModalRoute.of(context)?.settings.name !=
                      ProfilePage.routeName) {
                    Navigator.pushNamed(context, ProfilePage.routeName);
                  }
                },
              ),
              ListTile(
                leading: CircleIcon(
                  width,
                  icon: Icons.settings,
                  iconBackground: transparent,
                  iconSize: width * 0.075,
                  radius: width * 0.06,
                ),
                title: Text(
                  'Settings',
                  style: TextStyle(color: white, fontWeight: FontWeight.w400),
                ),
                onTap: () {
                  closeDrawer(context);
                },
              ),
              DividerLine(
                thickness: width * 0.002, // thickness of the line
                color: white, // The color to use when painting the line.
              ),
              ListTile(
                leading: CircleIcon(
                  width,
                  icon: Icons.article,
                  iconBackground: transparent,
                  iconSize: width * 0.075,
                  radius: width * 0.06,
                ),
                title: Text(
                  'Articless',
                  style: TextStyle(color: white, fontWeight: FontWeight.w400),
                ),
                onTap: () {
                  closeDrawer(context);
                },
              ),
              ListTile(
                leading: CircleIcon(
                  width,
                  icon: Icons.new_label,
                  iconBackground: transparent,
                  iconSize: width * 0.075,
                  radius: width * 0.06,
                ),
                title: Text(
                  'Add Article',
                  style: TextStyle(color: white, fontWeight: FontWeight.w400),
                ),
                onTap: () {
                  closeDrawer(context);
                  if (ModalRoute.of(context)?.settings.name !=
                      AddBlog.routeName) {
                    Navigator.pushNamed(context, AddBlog.routeName);
                  }
                },
              ),
              DividerLine(
                thickness: width * 0.002, // thickness of the line
                color: white, // The color to use when painting the line.
              ),
            ],
          ),
          Column(
            children: [
              DividerLine(
                thickness: width * 0.002, // thickness of the line
                color: white, // The color to use when painting the line.
              ),
              ListTile(
                leading: CircleIcon(
                  width,
                  icon: Icons.exit_to_app,
                  iconBackground: transparent,
                  iconSize: width * 0.075,
                  radius: width * 0.06,
                ),
                title: Text(
                  'Log Out',
                  style: TextStyle(color: white, fontWeight: FontWeight.w400),
                ),
                onTap: () {
                  closeDrawer(context);
                },
              ),
              SizedBox(
                height: height * 0.005, // thickness of the line
              ),
            ],
          )
        ],
      ),
    );
  }

  void closeDrawer(BuildContext context) {
    Navigator.pop(context);
  }
}
