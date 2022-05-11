import 'package:flutter/material.dart';
import '../pallete.dart';

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
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      child: Container(
        height: size.height * 0.08,
        width: size.width * 0.8,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Center(
          child: TextField(
            decoration: InputDecoration(
              border: InputBorder.none,
              prefixIcon: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20.0),
              ),
              hintText: hint,
              hintStyle: kBodyText,
            ),
            style: TextStyle(
                color: Colors.black, fontSize: 20, fontWeight: FontWeight.w400),
            keyboardType: inputType,
            textInputAction: inputAction,
          ),
        ),
      ),
    );
  }
}
