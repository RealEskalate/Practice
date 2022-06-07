import 'package:flutter/material.dart';
import '../constants.dart';

import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class PasswordInput extends StatelessWidget {
  bool _passwordVisible = false;
  PasswordInput({
    Key? key,
    required this.hint,
    this.inputType,
    this.inputAction,
  }) : super(key: key);

  final String hint;
  final TextInputType? inputType;
  final TextInputAction? inputAction;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Padding(
      padding: EdgeInsets.symmetric(vertical: size.height * 0),
      child: Container(
        // height: size.height * 0.08,
        width: size.width * 0.8,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(size.height / 37),
        ),
        child: Center(
          child: TextField(
            decoration: InputDecoration(
              border: InputBorder.none,
              prefixIcon: Padding(
                padding: EdgeInsets.symmetric(horizontal: size.height * 0.04),
              ),
              hintText: hint,
              suffixIcon: IconButton(
                padding: EdgeInsets.only(bottom: size.height * 0.002),
                icon: Icon(
                  // Based on passwordVisible state choose the icon
                  _passwordVisible ? Icons.visibility : Icons.visibility_off,
                  color: Colors.black,
                ),
                onPressed: () {
                  // Update the state i.e. toogle the state of passwordVisible variable
                  //  setState(() {
                  //      _passwordVisible = !_passwordVisible;
                  //  });
                },
              ),
              hintStyle: TextStyle(
                  fontSize: size.height * 0.0355,
                  color: gray,
                  height: size.height * 0.00065),
            ),
            obscureText: true,
            style: TextStyle(
              fontSize: size.height * 0.0355,
              color: black,
              //height: size.height * 0.00065
            ),
            keyboardType: inputType,
            textInputAction: inputAction,
          ),
        ),
      ),
    );
  }
}
