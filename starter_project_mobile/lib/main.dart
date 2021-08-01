import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:start_project_mobile/route.dart';

import 'bloc/like_bloc.dart';

void main() {
  runApp(BlocProvider(
    lazy: false,
    create: (context) => LikeBloc(false),
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
