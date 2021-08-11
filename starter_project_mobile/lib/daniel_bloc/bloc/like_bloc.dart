import 'dart:async';

import 'package:bloc/bloc.dart';
// import 'package:meta/meta.dart';

part 'like_event.dart';
part 'like_state.dart';

class LikeBlocDani extends Bloc<LikeToggleEvent, LikeState> {
  LikeBlocDani(bool isLiked) : super(LikeState.isNotLiked);

  bool isLiked = false;

  @override
  Stream<LikeState> mapEventToState(
    LikeToggleEvent event,
  ) async* {
    if (event == LikeToggleEvent.toggleLike) {
      isLiked = !isLiked;
      if (isLiked) {
        yield LikeState.isLiked;
      } else {
        yield LikeState.isNotLiked;
      }
    } else {
      yield LikeState.isNotLiked;
    }
  }
}
