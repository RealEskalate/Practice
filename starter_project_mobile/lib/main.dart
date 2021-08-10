import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/counter_bloc/counter_bloc.dart';
import 'package:starter_project_mobile/bloc/fav_bloc.dart';
import 'package:starter_project_mobile/bloc/theme_bloc.dart';
import 'package:starter_project_mobile/daniel_bloc/bloc/like_bloc.dart';
import 'package:starter_project_mobile/route.dart';
import 'package:starter_project_mobile/screens/Screens.dart';
import 'package:starter_project_mobile/bloc/star_bloc.dart';
import 'package:start_project_mobile/bloc/feysel/count_bloc.dart';

import 'bloc/like_bloc.dart';

void main() {
  runApp(MultiBlocProvider(
    providers: [
      BlocProvider(lazy: false, create: (context) => FavBloc()),
      BlocProvider(lazy: false, create: (context) => LikeBloc(false)),
      BlocProvider(lazy: false, create: (context) => ThemeBloc()),
      BlocProvider(lazy: false, create: (context) => CounterBloc()),
      BlocProvider<LikeBlocDani>(
        lazy: false,
        create: (context) => LikeBlocDani(false),
        child: DanielPage(),
      ),
      BlocProvider(lazy: false, create: (context) => LikeBloc(false)),
      BlocProvider(lazy: false, create: (context) => StarBloc()),
      BlocProvider(lazy: false, create: (context) => CountBloc(0)),
    ],
    child: MyApp(),
  ));
  // runApp(
  //   MultiBlocProvider(
  //     providers: [
  //       BlocProvider(
  //         lazy: false,
  //         create: (context) => LikeBloc(false),
  //         child: MyApp(),
  //       ),
  //       BlocProvider<LikeBlocDani>(
  //         lazy: false,
  //         create: (context) => LikeBlocDani(false),
  //         child: DanielPage(),
  //       )
  //     ],
  //     child: MyApp(),
  //   ),
  // );
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
