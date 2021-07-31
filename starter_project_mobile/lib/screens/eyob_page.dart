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

  Widget _buildLayout(BuildContext context) {
    return GestureDetector(
      onHorizontalDragStart: (_) {},
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded(
                child: BlocBuilder<QouteBloc, QouteState>(
                  builder: (context, state) {
                    return _buildQouteDisplay(context, state);
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
                    BlocBuilder<QouteBloc, QouteState>(
                      builder: (context, state) {
                        return _buildProgressDisplay(state);
                      },
                    ),
                    FloatingActionButton(
                      heroTag: "next btn",
                      onPressed: () {
                        context.read<QouteBloc>().add(QouteEvent.prev);
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

  Widget _buildProgressDisplay(QouteState state) {
    return Row(
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
    );
  }

  Widget _buildQouteDisplay(BuildContext context, QouteState state) {
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
  }
}
