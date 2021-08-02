import 'package:flutter_bloc/flutter_bloc.dart';

enum DarkModeEvent { dark, light }

class DarkModeBloc extends Bloc<DarkModeEvent, bool> {
  bool dark = false;

  DarkModeBloc(bool dark) : super(dark);

  @override
  Stream<bool> mapEventToState(DarkModeEvent event) async* {
    if (event == DarkModeEvent.dark) {
      dark = !dark;
    }
    yield dark;
  }
}
