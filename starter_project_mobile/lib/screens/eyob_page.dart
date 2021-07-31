import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:start_project_mobile/bloc/qoute_bloc/qoute_bloc.dart';

class EyobPage extends StatelessWidget {
  static const PageRoute = '/eyob';

  @override
  Widget build(BuildContext context) {
    return BlocProvider<QouteBloc>(
      create: (_) => QouteBloc(),
      child: Scaffold(
        backgroundColor: Colors.purple[200],
        body: Builder(builder: (BuildContext context) => _buildLayout(context)),
      ),
    );
  }

  SafeArea _buildLayout(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            BlocBuilder<QouteBloc, QouteState>(
              builder: (context, state) {
                return Expanded(
                  child: Center(
                    child: Image.asset(state.qoute.illustration),
                  ),
                  flex: 2,
                );
              },
            ),
            SizedBox(
              height: 5.0,
            ),
            Expanded(
              flex: 1,
              child: BlocBuilder<QouteBloc, QouteState>(
                builder: (context, state) {
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(state.qoute.author,
                          style: Theme.of(context)
                              .textTheme
                              .headline5
                              ?.copyWith(
                                  fontSize: 24.0, fontWeight: FontWeight.w800)),
                      SizedBox(
                        height: 10.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 10.0),
                        child: Text(
                          state.qoute.text,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              letterSpacing: .2,
                              fontWeight: FontWeight.w500,
                              fontSize: 18.0,
                              color: Colors.grey[800]),
                        ),
                      )
                    ],
                  );
                },
              ),
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
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      CircleAvatar(
                        radius: 5.0,
                        backgroundColor: Colors.white,
                      ),
                      SizedBox(
                        width: 5.0,
                      ),
                      CircleAvatar(
                        radius: 5.0,
                        backgroundColor: Colors.black,
                      ),
                      SizedBox(
                        width: 5.0,
                      ),
                      CircleAvatar(
                        radius: 5.0,
                        backgroundColor: Colors.white,
                      )
                    ],
                  ),
                  FloatingActionButton(
                    heroTag: "next btn",
                    onPressed: () {
                      BlocProvider.of<QouteBloc>(context).add(QouteEvent.next);
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
    );
  }
}
