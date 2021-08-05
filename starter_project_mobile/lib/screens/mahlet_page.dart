import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/bloc/fav_bloc.dart';
import 'package:starter_project_mobile/bloc/fav_event.dart';
import 'package:starter_project_mobile/bloc/fav_state.dart';

class MahletPage extends StatelessWidget {
  
  static const RouteName = "/mahlet";
  static var screenHeight;
  static var screenWidth;
  @override
  Widget build(BuildContext context) {
    
    screenHeight = MediaQuery.of(context).size.height;
    screenWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: Color(0xff0c0f14),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              Expanded(
                flex: 2,
                child: Stack(
                  children: [
                    Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          fit: BoxFit.cover,
                          image: AssetImage('assets/user-photo.jpg'),
                        ),
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          ClipRRect(
                            borderRadius: BorderRadius.circular(30.0),
                            child: BackdropFilter(
                              filter: ImageFilter.blur(
                                sigmaX: 10.0,
                                sigmaY: 10.0,
                              ),
                              child: Container(
                                padding: EdgeInsets.all(20.0),
                                width: double.infinity,
                                decoration: BoxDecoration(
                                  color: Color(0xff311d18).withOpacity(0.6),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Row(
                                      children: [
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  Text(
                                                    "About",
                                                    style: TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 20.0,
                                                      fontWeight:
                                                          FontWeight.normal,
                                                    ),
                                                  ),
                                                  SizedBox(
                                                    height: 3,
                                                  ),
                                                  Text(
                                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ultrices dictum. "
                  "Mauris consectetur leo vitae mauris scelerisque iaculis. Praesent massa lectus, interdum "
                  "non faucibus vitae, iaculis vitae nisl. Proin ac velit in ex mattis faucibus fringilla at "
                  "mauris. Aenean sed nisl metus. Proin mi nisi, aliquet vel accumsan at, convallis vitae neque. "
                  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "
                  "Pellentesque posuere pulvinar augue eu elementum. Mauris tellus purus, sollicitudin nec odio ",
                  style: TextStyle(
                                                      fontSize: 10.0,
                                                      color: Color(0xffaeaeae),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ],
                                          ),
                                        ),
                                        ],
                                    )
                                  ],
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    Padding(
                      padding:
                          const EdgeInsets.only(left: 20, top: 20, right: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              color: Color(0xff141921),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            child: IconButton(
                              icon: Icon(
                                Icons.arrow_back_ios_new,
                                size: 20,
                                color: Color(0xffaeaeae),
                              ),
                              onPressed: () {
                                Navigator.of(context).pop();
                              },
                            ),
                          ),
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              color: Color(0xff141921),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            child:
                            BlocBuilder<FavBloc, FavState>(
                builder: (context, liked) {
                  return IconButton(
                              icon: Icon(
                                Icons.favorite,
                                size: 20,
                                color: liked is UnSelectedState ? Color(0xffaeaeae): Color(0xffd17842),
                              ),
                              onPressed: () {
                                if (liked is SelectedState) {
                                  context.read<FavBloc>().add(Deselect());
                                } else {
                                context.read<FavBloc>().add(Select());
                                }
                              },
                            );
                  
                },
              ),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
              ],
          ),
        ),
      ),
    );
  }
}
