import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/login_signup/screens/landing-page.dart';
import 'package:starter_project_mobile_2022/routes.dart';
import 'package:starter_project_mobile_2022/main/homepage.dart';

import 'profile_page_dave/presentation/profile_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      onGenerateRoute: PageRouter.generateRoute,
      // initialRoute: "/",
      initialRoute: LandingPage.routename,
    );
  }
}
