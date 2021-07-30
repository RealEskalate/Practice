import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import './Screens.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Scaffold(
        appBar: AppBar(
          title: Text("Starter Project - Mobile"),
        ),
        drawer: MainDrawer(),
        body: Container(
          color: Colors.blueAccent,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                ClipRRect(
                    borderRadius: BorderRadius.circular(200.0),
                    child: Image(image: AssetImage('assets/A2SV logo.png'))),
                Padding(
                  padding: new EdgeInsets.all(10.0),
                ),
                Text(
                  'This is Home Screen',
                  style: new TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                    fontSize: 20.0,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
