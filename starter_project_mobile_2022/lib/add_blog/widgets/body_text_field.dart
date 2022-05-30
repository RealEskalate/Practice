import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/constants/constants.dart';

class BodyTextField extends StatelessWidget {
  final String label;
  const BodyTextField({Key? key, required this.label}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: outerWidgetPadding,
      child: TextFormField(
        decoration: InputDecoration(
          border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(buttonBorderRadius),
              borderSide: const BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(inputDecorationBorderRadius),
              borderSide: const BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(inputDecorationBorderRadius),
              borderSide: const BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          errorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(inputDecorationBorderRadius),
              borderSide: const BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          disabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(inputDecorationBorderRadius),
              borderSide: const BorderSide(
                  color: inputDecorationColor, width: inputDecorationWidth)),
          labelText: label,
          labelStyle:
              const TextStyle(color: labelColor, fontSize: labelFontSize),
          counterText: "",
        ),
        maxLength: bodyTextMaxLength,
        maxLines: bodyTextMaxLines,
      ),
    );
  }
}
