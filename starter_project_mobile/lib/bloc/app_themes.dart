import 'package:flutter/material.dart';
import 'package:starter_project_mobile/utils/colors.dart';

class AppThemes {
  static final appThemeData = {
    AppTheme.lightTheme: ThemeData(
      scaffoldBackgroundColor: Colors.white,
      primarySwatch: Colors.blue,
      iconTheme: IconThemeData(color: Colors.amber),
      backgroundColor: Colors.white,
      textTheme: TextTheme(
        bodyText1: TextStyle(
          color: Colors.black,
        ),
      ),
    ),
    AppTheme.darkTheme: ThemeData(
      scaffoldBackgroundColor: darkTheme,
      iconTheme: IconThemeData(color: Colors.white),
      primarySwatch: Colors.grey,
      backgroundColor: darkTheme,
      textTheme: TextTheme(
        bodyText2: TextStyle(
          color: Colors.white,
        ),
        bodyText1: TextStyle(
          color: Colors.white,
        ),
      ),
    )
  };
}

enum AppTheme {
  lightTheme,
  darkTheme,
}
