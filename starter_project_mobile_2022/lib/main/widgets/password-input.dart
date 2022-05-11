import 'package:flutter/material.dart';
import '../pallete.dart';

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
              suffixIcon: IconButton(
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
              hintStyle: kBodyText,
            ),
            obscureText: true,
            style: kBody,
            keyboardType: inputType,
            textInputAction: inputAction,
          ),
        ),
      ),
    );
  }
}
