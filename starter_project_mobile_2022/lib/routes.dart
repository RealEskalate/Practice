import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/blog_detail_murad/presentation/screens/blog_details_page.dart';
import 'package:starter_project_mobile_2022/main/homepage.dart';

class PageRouter {
  static Route? generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case "/":
        return MaterialPageRoute(builder: (context) {
          return const MyHomePage(
            title: "Test Project",
          );
        });
      case PostDetailpage.routeName:
        return MaterialPageRoute(builder: (context) {
          return PostDetailpage();
        });
    }
    return null;
  }
}
