import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SurafelPage extends StatelessWidget {
  static const PageRoute = '/surafel';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFA7DCF0),
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        backgroundColor: Colors.blueAccent,
        title: Text("Surafel"),
      ),
      body: Container(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  SizedBox(width: 10),
                  CircleAvatar(
                    backgroundColor: Color(0xFF132880),
                    child: Icon(
                      Icons.person,
                      size: 50,
                    ),
                    radius: 40,
                  ),
                  SizedBox(width: 10),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Surafel Kassahun",
                        style: Theme.of(context).textTheme.headline5?.copyWith(
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF132880),
                            ),
                      ),
                      SizedBox(height: 10),
                      Text(
                        "lorem ipsum",
                        style: Theme.of(context).textTheme.headline6?.copyWith(
                              color: Color(0xFF132880),
                              fontSize: 18,
                            ),
                      ),
                      Text(
                        "lorem ipsum",
                        style: Theme.of(context).textTheme.headline6?.copyWith(
                              color: Color(0xFF132880),
                              fontSize: 18,
                            ),
                      )
                    ],
                  )
                ],
              ),
              SizedBox(height: 30),
              Row(
                children: [
                  Expanded(
                    child: DefaultTabController(
                      length: 2, // length of tabs
                      initialIndex: 0,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Container(
                            child: TabBar(
                              labelColor: Color(0xFF2685F0),
                              unselectedLabelColor: Colors.black,
                              tabs: [
                                Tab(text: 'About'),
                                Tab(text: 'Edit'),
                              ],
                            ),
                          ),
                          Container(
                            height: 300, //height of TabBarView
                            decoration: BoxDecoration(
                              border: Border(
                                top: BorderSide(color: Colors.grey, width: 0.5),
                              ),
                            ),
                            child: TabBarView(
                              children: [
                                Container(
                                  child: Center(
                                    child: Padding(
                                      padding:
                                          EdgeInsets.symmetric(horizontal: 35),
                                      child: Text(
                                        '''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        ''',
                                        textAlign: TextAlign.justify,
                                        style: Theme.of(context)
                                            .textTheme
                                            .headline6
                                            ?.copyWith(
                                              color: Color(0xFF132880),
                                              fontWeight: FontWeight.normal,
                                              fontSize: 16,
                                            ),
                                      ),
                                    ),
                                  ),
                                ),
                                Container(
                                  child: Padding(
                                    padding: EdgeInsets.symmetric(
                                        horizontal: 70, vertical: 10),
                                    child: Center(
                                      child: Column(
                                        children: [
                                          TextFormField(
                                            decoration: InputDecoration(
                                                border: UnderlineInputBorder(),
                                                labelText:
                                                    'Enter your full name'),
                                            onFieldSubmitted: (String str) {},
                                          ),
                                          SizedBox(
                                            height: 10,
                                          ),
                                          TextButton(
                                            onPressed: () {},
                                            child: Text(
                                              "Submit",
                                              style: Theme.of(context)
                                                  .textTheme
                                                  .headline6
                                                  ?.copyWith(
                                                    color: Color(0xFF132880),
                                                    fontWeight:
                                                        FontWeight.normal,
                                                    fontSize: 16,
                                                  ),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
