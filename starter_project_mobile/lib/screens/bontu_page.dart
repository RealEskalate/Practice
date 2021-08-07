import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:google_fonts/google_fonts.dart';
import '../bloc/like_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:start_project_mobile/bloc/star_bloc.dart';
import 'package:start_project_mobile/bloc/star_event.dart';
import 'package:start_project_mobile/bloc/star_state.dart';

class BontuPage extends StatelessWidget {
  static const RouteName = "/bontu";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        child: Center(
          child: Container(
              color: Colors.blue.shade200,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    child: Stack(
                      fit: StackFit.passthrough,
                      alignment: AlignmentDirectional.bottomEnd,
                      children: <Widget>[
                        Image(
                          image: AssetImage('assets/girl.jpg'),
                        ),
                        Column(
                          children: [
                            BlocBuilder<StarBlock, StarState>(
                                builder: (context, starred) {
                              return IconButton(
                                icon: Icon(
                                  starred is StarredState
                                      ? Icons.star
                                      : Icons.star_border_outlined,
                                  size: 35,
                                  color: Colors.amber,
                                ),
                                onPressed: () {
                                  if (starred is StarredState) {
                                    context.read<StarBlock>().add(Unstar());
                                  } else {
                                    context.read<StarBlock>().add(Star());
                                  }
                                },
                              );
                            }),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Text(
                    "Bontu",
                    style: GoogleFonts.piazzolla(
                        color: Colors.black, fontSize: 30),
                    textDirection: TextDirection.ltr,
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Container(
                    padding: const EdgeInsets.all(25.0),
                    alignment: Alignment.bottomCenter,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: <Color>[
                          Colors.blue.shade200,
                          Colors.blue.shade50,
                          Colors.blue.shade200
                        ],
                      ),
                    ),
                    child: const Text(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ultrices dictum. "
                      "Mauris consectetur leo vitae mauris scelerisque iaculis. Praesent massa lectus, interdum "
                      "non faucibus vitae, iaculis vitae nisl. Proin ac velit in ex mattis faucibus fringilla at "
                      "mauris. Aenean sed nisl metus. Proin mi nisi, aliquet vel accumsan at, convallis vitae neque. "
                      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "
                      "Pellentesque posuere pulvinar augue eu elementum. Mauris tellus purus, sollicitudin nec odio ",
                      style: TextStyle(color: Colors.black54, fontSize: 15.0),
                    ),
                  ),
                  IconButton(
                    icon:
                        const Icon(Icons.home_filled, color: Colors.blueAccent),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                ],
              )),
        ),
      ),
    );
  }
}
