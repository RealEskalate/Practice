import 'package:flutter_bloc/flutter_bloc.dart';

enum CountEvent { increament, decreament }

class CountBloc extends Bloc<CountEvent, int> {
  int count = 0;

  CountBloc(int count) : super(count);

  @override
  Stream<int> mapEventToState(CountEvent event) async* {
    if (event == CountEvent.increament) {
      count = count + 1;
    } else if (event == CountEvent.decreament) {
      count = count - 1;
    }
    yield count;
  }
}
