import 'package:flutter_bloc/flutter_bloc.dart';

enum LikeEvent { like, dislike }

class LikeBloc extends Bloc<LikeEvent, bool> {
  bool liked = false;

  LikeBloc(bool liked) : super(liked);

  @override
  Stream<bool> mapEventToState(LikeEvent event) async* {
    if (event == LikeEvent.like) {
      liked = !liked;
    }
    yield liked;
  }
}
