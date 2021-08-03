import 'package:flutter/material.dart';
import 'package:starter_project_mobile/screens/Screens.dart';
import 'package:starter_project_mobile/screens/eyob_screen/eyob_page.dart';
import 'package:starter_project_mobile/screens/home_page.dart';
import 'package:starter_project_mobile/screens/kaleb_page.dart';
import 'package:starter_project_mobile/screens/minasie_page.dart';

import 'models/User.dart';

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
      case EyobPage.PageRoute:
        return MaterialPageRoute(builder: (context) => EyobPage());
      case MinasiePage.RouteName:
        return MaterialPageRoute(builder: (context) {
          return MinasiePage();
        });
      case DanielPage.RouteName:
        return MaterialPageRoute(builder: (context) {
          return DanielPage();
        });
    }
  }
}
