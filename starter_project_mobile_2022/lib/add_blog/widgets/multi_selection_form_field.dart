import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/multi_selection_field.dart';

class MultiSelectionFormField<T> extends FormField<List<T>> {
  final InputDecoration decoration;

  MultiSelectionFormField({
    Key? key,
    this.decoration = const InputDecoration(),
    FormFieldSetter<List>? onSaved,
    FormFieldValidator<List>? validator,
  }) : super(
            key: key,
            onSaved: onSaved,
            validator: validator,
            builder: (FormFieldState<List> field) {
              final InputDecoration effectiveDecoration =
                  decoration.applyDefaults(
                Theme.of(field.context).inputDecorationTheme,
              );

              return InputDecorator(
                decoration:
                    effectiveDecoration.copyWith(errorText: field.errorText),
                isEmpty: field.value?.isEmpty ?? true,
                child: MultiSelectionField(
                  values: field.value?.map((e) => e.toString()).toList() ?? [],
                  onChanged: field.didChange,
                ),
              );
            });
}
