import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../bloc/like_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class KalebPage extends StatelessWidget {
  static const RouteName = "/kaleb";
  @override
  Widget build(BuildContext context) {
    LikeBloc likeBloc = BlocProvider.of<LikeBloc>(context);
    return Scaffold(
      body: Container(
        color: Colors.blueAccent,
        padding: EdgeInsets.fromLTRB(50, 10, 50, 0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ClipRRect(
                  borderRadius: BorderRadius.circular(200.0),
                  child: Image(
                    image: AssetImage('assets/profile.png'),
                  )),
              SizedBox(
                height: 10,
              ),
              Text(
                "Kaleb Mesfin",
                style: TextStyle(
                  fontSize: 20.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(5.0, 10.0, 5.0, 10.0),
                child: Text(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ultrices dictum. "
                  "Mauris consectetur leo vitae mauris scelerisque iaculis. Praesent massa lectus, interdum "
                  "non faucibus vitae, iaculis vitae nisl. Proin ac velit in ex mattis faucibus fringilla at "
                  "mauris. Aenean sed nisl metus. Proin mi nisi, aliquet vel accumsan at, convallis vitae neque. "
                  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "
                  "Pellentesque posuere pulvinar augue eu elementum. Mauris tellus purus, sollicitudin nec odio ",
                  style: TextStyle(
                    //                  fontWeight: FontWeight.w400,
                    fontSize: 15.0,
                    color: Colors.white,
                  ),
                ),
              ),
              BlocBuilder<LikeBloc, bool>(
                builder: (context, liked) {
                  return Icon(
                      liked ? Icons.thumb_up : Icons.thumb_up_alt_outlined);
                },
              ),
              ElevatedButton(
                child: Text("Like"),
                onPressed: () => likeBloc.add(LikeEvent.like),
              ),
              ElevatedButton(
                child: Text("Go Back to Homepage"),
                style: ElevatedButton.styleFrom(
                  onPrimary: Colors.blueAccent,
                  primary: Colors.white,
                ),
                onPressed: () {
                  Navigator.pop(context);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
