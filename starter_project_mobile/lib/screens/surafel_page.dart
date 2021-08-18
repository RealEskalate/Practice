import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SurafelPage extends StatelessWidget {
  static const PageRoute = '/surafel';
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(
          "Here we go!",
          style: GoogleFonts.piazzolla(color: Colors.white, fontSize: 20),
        ),
      ),
    );
  }
}
