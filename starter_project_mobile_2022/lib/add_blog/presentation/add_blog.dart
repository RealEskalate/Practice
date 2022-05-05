import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';

class AddBlog extends StatefulWidget {
  const AddBlog({Key? key}) : super(key: key);

  @override
  State<AddBlog> createState() => _AddBlogState();
}

class _AddBlogState extends State<AddBlog> {
  int index = 2;
  @override
  Widget build(BuildContext context) {
    const items = <Widget>[
      Icon(
        Icons.home,
        size: 30,
        color: Colors.white,
      ),
      Icon(
        Icons.menu_book,
        size: 30,
        color: Colors.white,
      ),
      Icon(
        Icons.publish,
        size: 30,
        color: Colors.white,
      ),
      Icon(
        Icons.search,
        size: 30,
        color: Colors.white,
      ),
      Icon(
        Icons.person,
        size: 30,
        color: Colors.white,
      ),
    ];
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white54,
        elevation: 0,
        leading: const IconButton(icon: Icon(Icons.clear), onPressed: null),
      ),
      body: ListView(
        children: <Widget>[
          titleTextField(),
          bodyTextField(),
          const SizedBox(height: 20),
          addButton(),
        ],
      ),
      bottomNavigationBar: CurvedNavigationBar(
        backgroundColor: Colors.transparent,
        color: Colors.greenAccent,
        height: 70,
        index: index,
        items: items,
        buttonBackgroundColor: Colors.amber,
        onTap: (index) => setState(() => this.index = index),
      ),
    );
  }

  Widget titleTextField() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: TextFormField(
        decoration: const InputDecoration(
          border: OutlineInputBorder(
            borderSide: BorderSide(
              color: Colors.teal,
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Colors.orange,
              width: 2,
            ),
          ),
          labelText: "Add Image and Title",
          prefixIcon: IconButton(
            icon: Icon(
              Icons.image,
              color: Colors.teal,
            ),
            onPressed: null,
          ),
        ),
        maxLength: 100,
        maxLines: null,
      ),
    );
  }

  Widget bodyTextField() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: Expanded(
        child: TextFormField(
          decoration: const InputDecoration(
            border: OutlineInputBorder(
              borderSide: BorderSide(
                color: Colors.teal,
              ),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Colors.orange,
                width: 2,
              ),
            ),
            labelText: "Article Content",
            prefixIcon: IconButton(
              icon: Icon(
                Icons.image,
                color: Colors.teal,
              ),
              onPressed: null,
            ),
          ),
          maxLength: 10000,
          maxLines: 9,
        ),
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
