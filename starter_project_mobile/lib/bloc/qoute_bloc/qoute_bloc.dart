import 'dart:async';

import 'package:bloc/bloc.dart';

import 'package:start_project_mobile/models/Qoute.dart';

part 'qoute_state.dart';

enum QouteEvent { next, prev }

class QouteBloc extends Bloc<QouteEvent, QouteState> {
  QouteBloc() : super(QouteState(index: 0));

  @override
  Stream<QouteState> mapEventToState(
    QouteEvent event,
  ) async* {
    switch (event) {
      case QouteEvent.next:
        int nexIndex = (state.index + 1) % QouteState.qoutesCount;
        yield QouteState(index: nexIndex);
        break;
      case QouteEvent.prev:
        int newIndex =
            (state.index + QouteState.qoutesCount - 1) % QouteState.qoutesCount;
        yield QouteState(index: newIndex);
    }
  }
}
