import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/constants/constants.dart';

class HeaderTextField extends StatelessWidget {
  final String label;
  const HeaderTextField({Key? key, required this.label}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: outerWidgetPadding,
      child: TextFormField(
        decoration: InputDecoration(
          border: const UnderlineInputBorder(
              borderSide: BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          focusedBorder: const UnderlineInputBorder(
              borderSide: BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          enabledBorder: const UnderlineInputBorder(
              borderSide: BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          errorBorder: const UnderlineInputBorder(
              borderSide: BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          disabledBorder: const UnderlineInputBorder(
              borderSide: BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          contentPadding:
              contentPadding,
          hintText: label,
          hintStyle: const TextStyle(fontSize: hintTextSize, color: hintColor),
          counterText: "",
        ),
        maxLength: headerTextFieldMaxLength,
        maxLines: null,
      ),
    );
  }
}
