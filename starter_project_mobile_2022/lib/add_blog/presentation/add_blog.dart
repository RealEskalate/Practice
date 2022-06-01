// ignore_for_file: unused_field, import_of_legacy_library_into_null_safe

import 'package:floatingpanel/floatingpanel.dart';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/list_blog_page/presentation/drawer.dart';
import '../../list_blog_page/constants/colors.dart';
import '../constants/constants.dart';
import '../widgets/add_button.dart';
import '../widgets/body_text_field.dart';
import '../widgets/header_text_field.dart';
import '../widgets/multi_selection_form_field.dart';

class AddBlog extends StatefulWidget {
  static const routeName = "addBlog";
  final String label;
  const AddBlog({Key? key, this.label = "New Article"}) : super(key: key);

  @override
  State<AddBlog> createState() => _AddBlogState();
}

class _AddBlogState extends State<AddBlog> {
  final globalKey = GlobalKey<ScaffoldState>();
  final _formKey = GlobalKey<FormState>();
  List? _tags = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: globalKey,
      drawer: const DrawerSection(),
      appBar: AppBar(
        title: Text(
          widget.label,
          style: const TextStyle(
              fontSize: titleFontSize,
              fontWeight: titleFontWeight,
              color: titleFontColor),
        ),
        backgroundColor: pageBackground,
        elevation: 0,
        leading: IconButton(
          color: black,
          icon: const Icon(Icons.menu),
          onPressed: () {
            globalKey.currentState?.openDrawer();
          },
        ),
      ),
      body: Stack(
        children: [
          Form(
            key: _formKey,
            child: Column(
              children: [
                Expanded(
                  child: ListView(
                    children: <Widget>[
                      const HeaderTextField(label: titleLabel),
                      const HeaderTextField(label: subtitleLabel),
                      Padding(
                        padding: outerWidgetPadding,
                        child: Row(
                          children: [
                            Expanded(
                              flex: tagFormFieldFlex,
                              child: MultiSelectionFormField(
                                decoration: const InputDecoration(
                                    border: InputBorder.none),
                                validator: (tags) =>
                                    (tags?.length ?? 0) < 1 ? tagLabel : null,
                                onSaved: (tags) {
                                  _tags = tags;
                                },
                              ),
                            ),
                            Expanded(
                              flex: tagAddButtonFlex,
                              child: IconButton(
                                  onPressed: () {
                                    if (_formKey.currentState!.validate()) {
                                      setState(
                                          () => _formKey.currentState!.save());
                                    }
                                  },
                                  color: tagBackgroundColor,
                                  icon: const Icon(addTagButtonIcon)),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: innerWidgetPadding),
                      const BodyTextField(label: bodyTextLabel),
                      const SizedBox(height: innerWidgetPadding),
                      const SizedBox(height: innerWidgetPadding * 2),
                      const AddButton(),
                    ],
                  ),
                ),
              ],
            ),
          ),

          //TEMPORARY DEPENDENCY WIDGET
          FloatBoxPanel(
            backgroundColor: Colors.blue,
            contentColor: Colors.white,
            panelIcon: Icons.clear,
            panelOpenOffset: 20,
            panelAnimDuration: 400,
            panelAnimCurve: Curves.easeInOut,
            dockAnimCurve: Curves.easeInOut,
            dockAnimDuration: 1000,
            dockType: DockType.inside,
            buttons: const [
              Icons.attachment,
              Icons.photo_camera,
              Icons.video_library,
              Icons.format_align_center,
              Icons.text_fields
            ],
          )
        ],
      ),
    );
  }
}
