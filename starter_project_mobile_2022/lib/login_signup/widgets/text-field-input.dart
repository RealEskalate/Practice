import 'package:flutter/material.dart';
import '../constants.dart';

class TextInputField extends StatelessWidget {
  const TextInputField({
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
      padding: EdgeInsets.symmetric(vertical: size.height * 0.02),
      child: Container(
        height: size.height * 0.08,
        width: size.width * 0.8,
        decoration: BoxDecoration(
          color: white,
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
              hintStyle: TextStyle(
                  fontSize: size.height * 0.0355,
                  color: Colors.grey,
                  height: size.height * 0.00065),
            ),
            style: TextStyle(
                color: black,
                fontSize: size.height * 0.0355,
                fontWeight: FontWeight.w400),
            keyboardType: inputType,
            textInputAction: inputAction,
          ),
        ),
      ),
    );
  }
}
