import 'package:floatingpanel/floatingpanel.dart';
import 'package:flutter/material.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/body_text_field.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/header_text_field.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/linear_flow_widget.dart';
import 'package:starter_project_mobile_2022/add_blog/widgets/multi_selection_form_field.dart';

class AddBlog extends StatefulWidget {
  static const routeName = "addBlog";
  final String label;
  const AddBlog({Key? key, this.label = "New Article"}) : super(key: key);

  @override
  State<AddBlog> createState() => _AddBlogState();
}

class _AddBlogState extends State<AddBlog> {
  final _formKey = GlobalKey<FormState>();
  List? _tags = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.label,
          style: const TextStyle(
              fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
        ),
        backgroundColor: Colors.white54,
        elevation: 0,
        leading: const IconButton(icon: Icon(Icons.menu), onPressed: null),
      ),
      body: Stack(
        children: [
          Form(
            key: _formKey,
            child: Column(
              children: [
                Expanded(
                  flex: 12,
                  child: ListView(
                    children: <Widget>[
                      const HeaderTextField(label: "Add title"),
                      const HeaderTextField(label: "Add subtitle"),
                      Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 25, vertical: 10),
                        child: Row(
                          children: [
                            Expanded(
                              flex: 5,
                              child: MultiSelectionFormField(
                                decoration: const InputDecoration(
                                    border: InputBorder.none),
                                validator: (tags) => (tags?.length ?? 0) < 1
                                    ? 'Please add a tag'
                                    : null,
                                onSaved: (tags) {
                                  _tags = tags;
                                },
                              ),
                            ),
                            Expanded(
                              flex: 1,
                              child: IconButton(
                                  onPressed: () {
                                    if (_formKey.currentState!.validate()) {
                                      setState(
                                          () => _formKey.currentState!.save());
                                    }
                                  },
                                  color: const Color(0xff3B71FD),
                                  icon: const Icon(
                                      Icons.add_circle_outline_outlined)),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 10),
                      const BodyTextField(label: "Article Content"),
                      const SizedBox(height: 10),
                      // SizedBox(
                      // child: LinearFlowWidget(
                      // context: context,
                      // )),
                      const SizedBox(height: 20),
                      addButton(),
                    ],
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: LinearFlowWidget(
                    context: context,
                  ),
                ),
              ],
            ),
          ),
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

  Widget addButton() {
    return Center(
      child: Container(
        height: 50,
        width: 200,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(60),
          color: Colors.blue,
        ),
        child: const Center(
          child: Text(
            'Publish',
            style: TextStyle(
                color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
