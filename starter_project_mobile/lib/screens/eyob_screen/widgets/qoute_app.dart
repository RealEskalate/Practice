import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/qoute_bloc/qoute_bloc.dart';
import 'package:starter_project_mobile/screens/eyob_screen/widgets/progress_display.dart';
import 'package:starter_project_mobile/screens/eyob_screen/widgets/qoute_display.dart';

class QouteApp extends StatelessWidget {
  const QouteApp({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple[200],
      appBar: AppBar(
        backgroundColor: Colors.purple[200],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded(
                child: QouteDisplay(),
              ),
              Padding(
                padding: EdgeInsets.symmetric(vertical: 15.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    FloatingActionButton(
                      heroTag: "prev btn",
                      onPressed: () {
                        context.read<QouteBloc>().add(QouteEvent.prev);
                      },
                      child: Icon(
                        Icons.arrow_left,
                        size: 35.0,
                      ),
                      backgroundColor: Colors.white,
                      foregroundColor: Colors.black,
                    ),
                    ProgressDisplay(),
                    FloatingActionButton(
                      heroTag: "next btn",
                      onPressed: () {
                        context.read<QouteBloc>().add(QouteEvent.next);
                      },
                      child: Icon(
                        Icons.arrow_right,
                        size: 30.0,
                      ),
                      backgroundColor: Colors.black,
                      foregroundColor: Colors.white,
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
