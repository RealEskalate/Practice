import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/presentation/add_blog.dart';
import 'package:starter_project_mobile_2022/main/homepage.dart';
import 'package:starter_project_mobile_2022/profile_page/Presentation/Profile_Page.dart';

class PageRouter {
  static Route? generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case "/":
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return const HomePage();
            });
      case AddBlog.routeName:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return const AddBlog();
            });
      case ProfilePage.routeName:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return const ProfilePage();
            });
    }
    return null;
  }
}
