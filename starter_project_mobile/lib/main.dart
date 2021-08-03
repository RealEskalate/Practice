import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/fav_bloc.dart';
import 'package:starter_project_mobile/bloc/theme_bloc.dart';
import './route.dart';

import 'bloc/like_bloc.dart';

void main() {
  runApp(MultiBlocProvider(
    providers: [
      BlocProvider(lazy: false, create: (context) => FavBloc()),
      BlocProvider(lazy: false, create: (context) => LikeBloc(false)),
      BlocProvider(lazy: false, create: (context) => ThemeBloc()),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      // debugShowMaterialGrid: true,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      onGenerateRoute: PageRouter.generateRoute,
    );
  }
}
