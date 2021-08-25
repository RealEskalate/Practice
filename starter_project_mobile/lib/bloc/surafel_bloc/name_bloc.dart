import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/surafel_bloc/name_event.dart';

class NameBloc extends Bloc<NameChangedEvent, String> {
  NameBloc(String n) : super(n);

  @override
  Stream<String> mapEventToState(NameChangedEvent event) async* {
    yield event.name;
  }
}
