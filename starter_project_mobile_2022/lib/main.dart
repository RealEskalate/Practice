import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'main/screens/screens.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Log in',
      theme: ThemeData(
        textTheme:
            GoogleFonts.josefinSansTextTheme(Theme.of(context).textTheme),
        fontFamily: 'Poppins',
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => MYlanding(),
        'ForgotPassword': (context) => ForgotPassword(),
        'CreateNewAccount': (context) => CreateNewAccount(),
        'LoginScreen': (context) => LoginScreen(),
      },
    );
  }
}
