import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/fav_event.dart';
import 'package:starter_project_mobile/bloc/fav_state.dart';

class FavBloc extends Bloc<FavEvent, FavState> {
  //
  FavBloc()
      : super(
          UnSelectedState(),
        );
  @override
  Stream<FavState> mapEventToState(FavEvent event) async* {
    if (event is Select) {
      yield SelectedState();
    }else{
    yield UnSelectedState();
    }
  }
}
