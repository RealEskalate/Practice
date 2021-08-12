import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/star_state.dart';
import 'package:starter_project_mobile/bloc/star_event.dart';

class StarBloc extends Bloc<StarEvent, StarState> {
  StarBloc() : super(UnstarredState());

  @override
  Stream<StarState> mapEventToState(StarEvent event) async* {
    if (event is Unstar) {
      yield UnstarredState();
    } else {
      yield StarredState();
    }
  }
}
