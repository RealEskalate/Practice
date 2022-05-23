import 'package:sign_button/sign_button.dart';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../pallete.dart';
import '../widgets/widgets.dart';

class CreateNewAccount extends StatelessWidget {
  var size, height, width;
  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    height = size.height;
    width = size.width;
    return Scaffold(
      backgroundColor: bk,
      body: SingleChildScrollView(
        reverse: true,
        padding: EdgeInsets.all(32),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Container(
              height: width * 0.2,
              child: Text(
                'Sign up',
                style: TextStyle(
                    color: black,
                    fontSize: width * 0.12,
                    fontWeight: FontWeight.w700),
              ),
            ),
            Container(
              height: width * 0.2,
              child: Text(
                'Enter your email and password and start discovering',
                style: TextStyle(
                    color: black,
                    fontSize: width * 0.05,
                    fontWeight: FontWeight.w400),
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Container(
                  height: height * 0.12,
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0),
                    ),
                    elevation: 2,
                    child: TextInputField(
                      hint: 'Full name',
                      inputType: TextInputType.emailAddress,
                      inputAction: TextInputAction.next,
                    ),
                  ),
                ),
                Container(
                  height: height * 0.12,
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0),
                    ),
                    elevation: 2,
                    child: TextInputField(
                      hint: 'Email',
                      inputType: TextInputType.emailAddress,
                      inputAction: TextInputAction.next,
                    ),
                  ),
                ),
                Container(
                  height: height * 0.12,
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0),
                    ),
                    elevation: 2,
                    child: PasswordInput(
                      hint: 'Password',
                      inputAction: TextInputAction.done,
                    ),
                  ),
                ),
                SizedBox(
                  height: height / 25,
                ),
                RoundedButton(
                  buttonName: 'Log in',
                ),
                SizedBox(
                  height: height / 25,
                ),
              ],
            ),
            Container(
              height: width * 0.05,
              child: Text(
                'OR LOG IN WITH',
                style: TextStyle(
                    color: bb,
                    fontSize: width * 0.035,
                    fontWeight: FontWeight.w900),
              ),
            ),
            Container(
              height: width * 0.17,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SignInButton.mini(
                    buttonType: ButtonType.google,
                    onPressed: () {},
                  ),
                  SignInButton.mini(
                    buttonType: ButtonType.facebook,
                    onPressed: () {},
                  ),
                  SignInButton.mini(
                    buttonType: ButtonType.twitter,
                    onPressed: () {},
                  ),
                ],
              ),
            ),
            Container(
              height: width * 0.1,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Flexible(
                    child: Text(
                      'Do not have an account?',
                      style: TextStyle(
                          color: black,
                          fontSize: width * 0.055,
                          fontWeight: FontWeight.w400),
                    ), // <-- Wrapped in Expanded.
                  ),
                  SizedBox(
                    width: width * 0.02,
                  ),
                  GestureDetector(
                    onTap: () =>
                        Navigator.pushNamed(context, 'CreateNewAccount'),
                    child: Text(
                      'Sign up',
                      style: TextStyle(
                          color: kBlue,
                          fontSize: width * 0.055,
                          fontWeight: FontWeight.w700),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
