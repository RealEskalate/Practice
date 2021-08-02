import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:starter_project_mobile/bloc/darkmode_bloc.dart';
import 'package:starter_project_mobile/utils/colors.dart';
import 'package:starter_project_mobile/utils/customePainter.dart';

class MinasiePage extends StatelessWidget {
  static const RouteName = '/minasie';
  const MinasiePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    DarkModeBloc darkmode_Bloc = BlocProvider.of<DarkModeBloc>(context);
    bool dark = BlocProvider.of<DarkModeBloc>(context).dark;
    print(dark);
    // dark = true;

    return Scaffold(
      body: Center(
        child: Container(
          // color: Color(dark ? 0xffff : 0x0000),
          height: height,
          // color: Colors.redAccent,
          child: SingleChildScrollView(
            child: Column(
              children: [
                Image(
                  image: AssetImage("assets/boy.png"),
                  width: width * .7,
                  height: height * .3,
                ),
                Text('Minasie Alemu',
                    style: GoogleFonts.lato(
                        fontSize: 30, fontWeight: FontWeight.bold)),
                Text('Software Engineer at Eskalate LLC',
                    style: GoogleFonts.lato(fontSize: 15)),
                Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(0, 10, 0, 15),
                        child: Text(
                          'About',
                          style: GoogleFonts.lato(
                              fontSize: 26, fontWeight: FontWeight.bold),
                        ),
                      ),
                      Text(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ultrices dictum. "
                        "Mauris consectetur leo vitae mauris scelerisque iaculis. Praesent massa lectus, interdum "
                        "non faucibus vitae, iaculis vitae nisl.",
                        style:
                            GoogleFonts.lato(fontSize: 20, color: darkPurple),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(0, 10, 0, 15),
                        child: Text(
                          'Story',
                          style: GoogleFonts.lato(
                              fontSize: 26, fontWeight: FontWeight.bold),
                        ),
                      ),
                      Text(
                        "Proin ac velit in ex mattis faucibus fringilla at "
                        "mauris. Aenean sed nisl metus. Proin mi nisi, aliquet vel accumsan at, convallis vitae neque. "
                        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
                        style:
                            GoogleFonts.lato(fontSize: 20, color: darkPurple),
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Image(
                            image: AssetImage(
                              "assets/code.png",
                            ),
                            width: width * 0.15,
                            height: height * 0.2,
                          ),
                          Image(
                            image: AssetImage(
                              "assets/hiking.png",
                            ),
                            width: width * 0.15,
                            height: height * 0.2,
                          ),
                          Image(
                            image: AssetImage(
                              "assets/location.png",
                            ),
                            width: width * 0.15,
                            height: height * 0.2,
                          )
                        ],
                      )
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
