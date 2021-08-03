import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile/daniel_bloc/bloc/like_bloc.dart';

class DanielPage extends StatelessWidget {
  static const RouteName = '/daniel';
  const DanielPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var likeBloc = BlocProvider.of<LikeBlocDani>(context);
    return Scaffold(
      backgroundColor: Colors.blue,
      body: SafeArea(
        child: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0x1155FF),
                Color(0x0044FF),
                // Colors.red,
              ],
            ),
          ),
          child: Column(
            children: [
              SizedBox(height: 40),
              Center(
                child: Container(
                  width: 165,
                  height: 165,
                  child: Center(
                    child: Stack(
                      children: [
                        CircleAvatar(
                          // backgroundColor: Colors.red,
                          radius: 80,
                          backgroundImage: AssetImage("assets/image.jfif"),
                        ),
                        Positioned(
                          bottom: -10,
                          right: -20,
                          child: BlocBuilder<LikeBlocDani, LikeState>(
                            builder: (context, LikeState state) {
                              if (state == LikeState.isLiked) {
                                return TextButton(
                                  onPressed: () {
                                    likeBloc.add(LikeToggleEvent.toggleLike);
                                  },
                                  child: Icon(
                                    Icons.favorite,
                                    color: Colors.red,
                                  ),
                                );
                              } else {
                                return TextButton(
                                  onPressed: () {
                                    likeBloc.add(LikeToggleEvent.toggleLike);
                                  },
                                  child: Icon(
                                    Icons.favorite_border,
                                    color: Colors.white,
                                  ),
                                );
                              }
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              SizedBox(height: 40),
              Text(
                "Welcome User",
                style: TextStyle(color: Colors.white, fontSize: 32),
              ),
              SizedBox(height: 15),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 35.0),
                child: Text(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit condimentum mauris id tempor. Praesent eu commodo lacus. Praesent eget mi sed libero eleifend tempor. Sed at fringilla ipsum. duis malesuada feugiat urna vitae convallis. Aliquam eu libero arcu.",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    letterSpacing: 1,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
