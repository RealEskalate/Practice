import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/main/homepage.dart';
import 'package:starter_project_mobile_2022/profile_page/Presentation/Profile_Page.dart';

class PageRouter {
  static Route? generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case "/":
        return MaterialPageRoute(builder: (context) {
          return const HomePage();
        });
      case ProfilePage.routeName:
        return MaterialPageRoute(builder: (context) {
          return const ProfilePage();
        });
    }
    return null;
  }
}
