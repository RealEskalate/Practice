import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:start_project_mobile/bloc/star_event.dart';
import 'package:start_project_mobile/bloc/star_state.dart';

class StarBlock extends Bloc<StarEvent, StarState> {
  StarBlock() : super(UnstarredState());

  @override
  Stream<StarState> mapEventToState(StarEvent event) async* {
    if (event is Unstar) {
      yield UnstarredState();
    } else {
      yield StarredState();
    }
  }
}
