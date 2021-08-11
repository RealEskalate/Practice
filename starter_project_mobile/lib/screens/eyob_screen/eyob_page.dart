import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/qoute_bloc/qoute_bloc.dart';
import 'package:starter_project_mobile/screens/eyob_screen/widgets/qoute_app.dart';

class EyobPage extends StatelessWidget {
  static const PageRoute = '/eyob';

  @override
  Widget build(BuildContext context) {
    return BlocProvider<QouteBloc>(
      create: (_) => QouteBloc(),
      child: QouteApp(),
    );
  }
}
