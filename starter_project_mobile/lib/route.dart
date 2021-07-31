import 'package:flutter/material.dart';
import 'package:start_project_mobile/screens/Screens.dart';

import 'models/User.dart';

class PageRouter {
  static Route? generateRoute(RouteSettings settings) {
    late User? user;
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
    }
  }
}
