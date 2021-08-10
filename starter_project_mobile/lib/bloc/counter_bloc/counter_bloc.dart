import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/counter_bloc/counter_state.dart';

enum CounterBlocEvent{inc,dec}

class CounterBloc extends Bloc<CounterBlocEvent,CounterBlocState>{
  CounterBloc() : super(CounterBlocState(0));

  Stream<CounterBlocState> mapEventToState(CounterBlocEvent event)async*{
    if(event==CounterBlocEvent.inc){
      int curr = state.val+1;
      yield CounterBlocState(curr);
    }
    else if(event == CounterBlocEvent.dec){
       int curr = state.val-1;
      yield CounterBlocState(curr);
    }
  }
}
