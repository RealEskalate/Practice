import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class EyobPage extends StatelessWidget {
  static const PageRoute = '/eyob';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Text('Eyob Alemu'),
        ),
      ),
    );
  }
}
