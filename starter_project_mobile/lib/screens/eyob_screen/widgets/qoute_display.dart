import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile/bloc/qoute_bloc/qoute_bloc.dart';

class QouteDisplay extends StatelessWidget {
  const QouteDisplay({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<QouteBloc, QouteState>(
      builder: (context, state) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Image.asset(state.qoute.illustration),
            ),
            SizedBox(
              height: 50.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10.0),
              child: Text(
                state.qoute.text,
                textAlign: TextAlign.center,
                style: Theme.of(context)
                    .textTheme
                    .headline5
                    ?.copyWith(fontSize: 22.0, fontWeight: FontWeight.w800),
              ),
            ),
            SizedBox(
              height: 10.0,
            ),
            Text(
              state.qoute.author,
              style: TextStyle(
                  letterSpacing: .2,
                  fontWeight: FontWeight.w500,
                  fontSize: 18.0,
                  color: Colors.grey[800]),
            )
          ],
        );
      },
    );
  }
}
