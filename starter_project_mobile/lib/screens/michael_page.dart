import 'package:flutter/material.dart';
import '../bloc/michael_bloc/coin_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MichaelPage extends StatelessWidget {
  const MichaelPage({Key? key}) : super(key: key);

  static const PageRoute = '/michael';

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    CoinBloc coinBloc = BlocProvider.of<CoinBloc>(context);
    return Scaffold(
      body: Container(
        color: Colors.blueGrey[200],
        padding: EdgeInsets.fromLTRB(50, 100, 50, 0),
        child: Center(
          child: Column(
            children: [
              CircleAvatar(
                backgroundColor: Colors.black45,
                radius: 60.0,
                child: CircleAvatar(
                  backgroundImage: AssetImage('assets/boy.png'),
                  radius: 50.0,
                ),
              ),
              SizedBox(height: 10),
              Text('Michael Gashaw',
                  style: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                  )),
              Text('Student at AAiT',
                  style: TextStyle(
                    fontSize: 20,
                  )),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Divider(
                        color: Colors.black,
                      ),
                      Text(
                        'Coin Value :',
                        style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      BlocBuilder<CoinBloc, int>(
                        builder: (context, coin) {
                          return Text(
                            '$coin',
                            style: TextStyle(
                              fontSize: 50,
                              fontWeight: FontWeight.bold,
                            ),
                          );
                        },
                      ),
                      ElevatedButton(
                        style:
                            ElevatedButton.styleFrom(primary: Colors.black45),
                        onPressed: () {
                          coinBloc.add(CoinEvent.reset);
                        },
                        child: Text(' Reset '),
                      ),
                    ]),
              )
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          coinBloc.add(CoinEvent.add);
        },
        child: Container(
          width: 60,
          height: 60,
          child: Icon(Icons.add),
          decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                colors: [Colors.black45, Colors.black45],
              )),
        ),
      ),
    );
  }
}
