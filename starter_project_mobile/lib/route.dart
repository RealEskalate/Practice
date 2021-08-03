import 'package:flutter/material.dart';
import 'package:starter_project_mobile/screens/mahlet_page.dart';
import 'package:starter_project_mobile/screens/home_page.dart';
import 'package:starter_project_mobile/screens/kaleb_page.dart';
import 'package:starter_project_mobile/screens/minasie_page.dart';


class PageRouter {
  static Route? generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case "/":
        return MaterialPageRoute(builder: (context) {
          return MyHomePage();
        });

      case KalebPage.RouteName:
        return MaterialPageRoute(builder: (context) {
          return KalebPage();
        });
      case MinasiePage.RouteName:
        return MaterialPageRoute(builder: (context) {
          return MinasiePage();
        });
      case MahletPage.RouteName:
        return MaterialPageRoute(builder: (context) {
          return MahletPage();
        });
    }
  }
}
