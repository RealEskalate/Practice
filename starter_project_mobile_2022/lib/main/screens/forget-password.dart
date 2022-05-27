import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../pallete.dart';
import '../widgets/background-image.dart';
import '../widgets/rounded-button.dart';
import '../widgets/text-field-input.dart';

class ForgotPassword extends StatelessWidget {
  var size, height, width;
  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    height = size.height;
    width = size.width;
    return Stack(
      children: [
        Scaffold(
          appBar: AppBar(
            backgroundColor: Transpa,
            elevation: 0,
            leading: IconButton(
              onPressed: () {
                Navigator.pop(context);
              },
              icon: Icon(
                Icons.arrow_back_ios,
                color: kWhite,
              ),
            ),
            centerTitle: true,
          ),
          body: SingleChildScrollView(
            reverse: true,
            padding: EdgeInsets.all(height / 25),
            child: Column(
              children: [
                Center(
                  child: Column(
                    children: [
                      SizedBox(
                        height: height / 25,
                      ),
                      Text(
                        'Forgot Password',
                        style: TextStyle(
                            color: black,
                            fontSize: width * 0.12,
                            fontWeight: FontWeight.w700),
                      ),
                      SizedBox(
                        height: height / 15,
                      ),
                      Card(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(height / 37),
                        ),
                        elevation: height * 0.003,
                        child: TextInputField(
                          hint: 'Email',
                          inputType: TextInputType.emailAddress,
                          inputAction: TextInputAction.next,
                        ),
                      ),
                      SizedBox(
                        height: height / 30,
                      ),
                      RoundedButton(buttonName: 'Submit'),
                      SizedBox(
                        height: height / 15,
                      ),
                      GestureDetector(
                        onTap: () =>
                            Navigator.pushNamed(context, 'LoginScreen'),
                        child: Text(
                          'Back to Log in',
                          style: TextStyle(
                              color: blue,
                              fontSize: width / 20,
                              fontWeight: FontWeight.w400),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}
