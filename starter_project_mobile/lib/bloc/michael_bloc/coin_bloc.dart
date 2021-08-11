import 'package:flutter_bloc/flutter_bloc.dart';

enum CoinEvent { add, reset }

class CoinBloc extends Bloc<CoinEvent, int> {
  int coin = 0;

  CoinBloc(int coin) : super(coin);

  @override
  Stream<int> mapEventToState(CoinEvent event) async* {
    if (event == CoinEvent.add) {
      coin = coin + 1;
    }else if(event == CoinEvent.reset){
      coin = 0;
    }
    yield coin;
  }
}