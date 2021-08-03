import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile/bloc/qoute_bloc/qoute_bloc.dart';

class ProgressDisplay extends StatelessWidget {
  const ProgressDisplay({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<QouteBloc, QouteState>(
      builder: (context, state) {
        return Container(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              CircleAvatar(
                radius: 5.0,
                backgroundColor: state.index == 0 ? Colors.black : Colors.white,
              ),
              SizedBox(
                width: 5.0,
              ),
              CircleAvatar(
                radius: 5.0,
                backgroundColor: state.index == 1 ? Colors.black : Colors.white,
              ),
              SizedBox(
                width: 5.0,
              ),
              CircleAvatar(
                radius: 5.0,
                backgroundColor: state.index == 2 ? Colors.black : Colors.white,
              )
            ],
          ),
        );
      },
    );
  }
}
