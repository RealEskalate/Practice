import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/presentation/add_blog.dart';
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
      case "/addBlog":
        return MaterialPageRoute(builder: (context) {
          return const AddBlog();
        });
    }
    return null;
  }
}
