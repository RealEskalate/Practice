import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/feysel/count_bloc.dart';

class FeyselPage extends StatelessWidget {
  static const RouteName = "/feysel";

  @override
  Widget build(BuildContext context) {
    CountBloc countBloc = BlocProvider.of<CountBloc>(context);

    return Scaffold(
      body: Container(
        padding: EdgeInsets.all(30),
        color: Colors.blue.shade500,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(200.0),
                child: Image.asset(
                  'assets/feysel.jpg',
                  width: 200,
                  height: 200,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                'Feysel Mubarek',
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 19,
                    fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 12,
                ),
                textAlign: TextAlign.justify,
              ),
              SizedBox(
                height: 10,
              ),
              Icon(
                Icons.thumb_up_alt_outlined,
                color: Colors.white,
                size: 24.0,
                semanticLabel: 'Text to announce in accessibility modes',
              ),
              SizedBox(
                height: 10,
              ),
              BlocBuilder<CountBloc, int>(
                builder: (context, count) {
                  return Text(
                    '$count',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  );
                },
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: EdgeInsets.all(10),
                    child: ElevatedButton(
                      child: Text("Like"),
                      onPressed: () {
                        countBloc.add(CountEvent.increament);
                      },
                      style: ElevatedButton.styleFrom(
                        onPrimary: Colors.blueAccent,
                        primary: Colors.white,
                      ),
                    ),
                  ),
                  ElevatedButton(
                    child: Text("Dis Like"),
                    onPressed: () {
                      countBloc.add(CountEvent.decreament);
                    },
                    style: ElevatedButton.styleFrom(
                      onPrimary: Colors.blueAccent,
                      primary: Colors.white,
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
