import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:starter_project_mobile/screens/kaleb_page.dart';
import 'package:starter_project_mobile/screens/mahlet_page.dart';
import 'package:starter_project_mobile/screens/minasie_page.dart';

class MainDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          Container(
            width: double.infinity,
            padding: EdgeInsets.all(40.0),
            color: Theme.of(context).primaryColor,
            child: Center(
              child: Text(
                "A2SV Mobile Start Project",
                style: GoogleFonts.piazzolla(color: Colors.white, fontSize: 20),
              ),
            ),
          ),

          /**
           * This ListTile is used to list names in the drawer
           * to add your name to the drawer you can use the same
           * pattern as follows
           */
          ListTile(
              leading: Icon(Icons.person),
              title: Text(
                "Kaleb",
                style: TextStyle(
                  color: Colors.blueAccent,
                  fontSize: 16.0,
                ),
              ),
              onTap: () {
                Navigator.of(context).pushNamed(KalebPage.RouteName);
              }),
          ListTile(
              leading: Icon(Icons.person),
              title: Text(
                "Minasie",
                style: TextStyle(
                  color: Colors.blueAccent,
                  fontSize: 16.0,
                ),
              ),
              onTap: () {
                Navigator.of(context).pushNamed(MinasiePage.RouteName);
              }),
              ListTile(
              leading: Icon(Icons.person),
              title: Text(
                "Mahlet",
                style: TextStyle(
                  color: Colors.blueAccent,
                  fontSize: 16.0,
                ),
              ),
              onTap: () {
                Navigator.of(context).pushNamed(MahletPage.RouteName);
              }),
        ],
      ),
    );
  }
}
