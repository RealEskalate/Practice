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
          padding: EdgeInsets.only(top:120,left:20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(
                'Hanna Samuel',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 35),
                textAlign: TextAlign.left,
              ),
              Padding(
                padding: const EdgeInsets.all(5.0),
                child: Text(
                  'Quis commodo labore non magna Lorem consequat adipisicing excepteur duis cillum. Reprehenderit fugiat ullamco anim dolore. Id ipsum pariatur culpa nostrud cupidatat non eu ex culpa commodo irure in esse proident.Proident qui occaecat in amet esse in esse dolor laboris et amet qui officia sit. Anim est laborum duis nostrud. Velit in id tempor aliquip cillum excepteur commodo.Occaecat non quis do labore ad pariatur aliqua magna enim sint id consequat cupidatat sint.',
                  style: TextStyle(
                      fontWeight: FontWeight.w300,
                      fontSize: 14,
                      color: Colors.grey),
                  textAlign: TextAlign.left,
                ),
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