import 'package:flutter/material.dart';

class DanielPage extends StatelessWidget {
  static const RouteName = '/daniel';
  const DanielPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      body: SafeArea(
        child: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0x1155FF),
                Color(0x0044FF),
                // Colors.red,
              ],
            ),
          ),
          child: Column(
            children: [
              SizedBox(height: 40),
              Center(
                child: CircleAvatar(
                  radius: 80,
                  backgroundImage: AssetImage("assets/image.jfif"),
                ),
              ),
              SizedBox(height: 40),
              Text(
                "Welcome User",
                style: TextStyle(color: Colors.white, fontSize: 32),
              ),
              SizedBox(height: 15),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 35.0),
                child: Text(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit condimentum mauris id tempor. Praesent eu commodo lacus. Praesent eget mi sed libero eleifend tempor. Sed at fringilla ipsum. duis malesuada feugiat urna vitae convallis. Aliquam eu libero arcu.",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    letterSpacing: 1,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
