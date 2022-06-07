import 'package:flutter/material.dart';

import 'add_blog/presentation/add_blog.dart';
import 'blog_detail/presentation/screens/blog_details_page.dart';
import 'login_signup/screens/initial_screens.dart';
import 'main/homepage.dart';
import 'profile_page/Presentation/Profile_Page.dart';

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
      case PostDetailpage.routeName:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return PostDetailpage();
            });

      // Routes For Initial Landing Pages
      case LandingPage.routename:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return LandingPage();
            });
      case LoginScreen.routename:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return LoginScreen();
            });
      case CreateNewAccount.routename:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return CreateNewAccount();
            });
      case ForgotPassword.routename:
        return MaterialPageRoute(
            settings: settings,
            builder: (context) {
              return ForgotPassword();
            });
    }
    return null;
  }
}
