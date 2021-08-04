import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/counter_bloc/counter_bloc.dart';
import 'package:starter_project_mobile/bloc/counter_bloc/counter_state.dart';

class HannaPage extends StatefulWidget {
  static const RouteName = '/hanna';
  @override
  _HannaPageState createState() => _HannaPageState();
}

class _HannaPageState extends State<HannaPage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(body:
          BlocBuilder<CounterBloc, CounterBlocState>(builder: (context, state) {
        return Container(
          width: double.infinity,
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 120),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(
                'Starter-project',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40),
                textAlign: TextAlign.left,
              ),
              Text(
                'Hanna Samuel',
                style: TextStyle(
                    fontWeight: FontWeight.w300,
                    fontSize: 18,
                    color: Colors.grey),
                textAlign: TextAlign.left,
              ),
              ClipRRect(
                borderRadius: BorderRadius.circular(25.0),
                child: Image.asset('assets/pic.png'),
              ),
              Padding(
                padding: const EdgeInsets.all(15.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    TextButton(
                        onPressed: () {
                          BlocProvider.of<CounterBloc>(context)
                              .add(CounterBlocEvent.inc);
                        },
                        child: Text('Inc')),
                    Text(
                      '${state.val}',
                      style: Theme.of(context).textTheme.headline5,
                    ),
                    TextButton(
                        onPressed: () {
                          BlocProvider.of<CounterBloc>(context)
                              .add(CounterBlocEvent.dec);
                        },
                        child: Text('Dec')),
                  ],
                ),
              ),
            ],
          ),
        );
      })),
    );
  }
}