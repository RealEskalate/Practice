import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/profile_page/Presentation/Profile_Page.dart';
import 'package:starter_project_mobile_2022/routes.dart';

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
      initialRoute: ProfilePage.routeName,
    );
  }
}
