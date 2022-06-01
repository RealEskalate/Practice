import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/constants/constants.dart';

class AddButton extends StatelessWidget {
  const AddButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Container(
      height: buttonHeight,
      width: buttonWidth,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(buttonBorderRadius),
        color: buttonBackgroundColor,
      ),
      child: const Center(
        child: Text(
          buttonLabel,
          style: TextStyle(
              color: buttonContentColor,
              fontSize: titleFontSize,
              fontWeight: buttonTextFontWeight),
        ),
      ),
    ));
  }
}
