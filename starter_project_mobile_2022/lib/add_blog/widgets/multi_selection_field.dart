// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/constants/constants.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/chip_list.dart';

class MultiSelectionField extends StatelessWidget {
  MultiSelectionField(
      {Key? key,
      required this.onChanged,
      required this.values,
      this.label = "Add tags"})
      : super(key: key);

  ValueChanged<List> onChanged;
  List<String> values;
  String label;

  @override
  Widget build(BuildContext context) {
    return Column(mainAxisSize: MainAxisSize.min, children: [
      TextField(
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
          contentPadding: contentPadding,
          hintText: label,
          hintStyle: const TextStyle(fontSize: hintTextSize, color: hintColor),
          counterText: "",
        ),
        onSubmitted: (String value) {
          values.add(value);
          onChanged(values);
        },
      ),
      ChipList(
          values: values,
          chipBuilder: (String value) {
            return Chip(
              label: Text(value),
              onDeleted: () {
                values.remove(value);
                onChanged(values);
              },
            );
          })
    ]);
  }
}
