import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../constants/colors.dart';
import '../widgets/post_card.dart';
import '../widgets/search_bar.dart';
import '../widgets/topic_button.dart';
import 'drawer.dart';

class BlogListingPage extends StatefulWidget {
  const BlogListingPage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<BlogListingPage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<BlogListingPage> {
  final globalKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;

    final List<PostCard> posts = [
      PostCard(
        created: '2d ago',
        description:
            'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
        // heigth: height * 0.37, // For IOS
        heigth: height * 0.411,
        width: width * 0.93,
        padding: width * 0.03,
        icon: Icons.person,
        image: Icons.texture_sharp,
        numOfComments: '16',
        numOfStars: 2,
        title: 'Adrian Smith',
      ),
      PostCard(
        created: '2d ago',
        description:
            'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
        heigth: height * 0.411,
        width: width * 0.93,
        padding: width * 0.03,
        icon: Icons.person,
        image: Icons.texture_sharp,
        numOfComments: '16',
        numOfStars: 4,
        title: 'Adrian Smith',
      ),
    ];

    return Scaffold(
        key: globalKey,
        backgroundColor: mainBackground,
        drawerEnableOpenDragGesture: false,
        drawer: const DrawerSection(),
        appBar: AppBar(
            systemOverlayStyle: const SystemUiOverlayStyle(
              statusBarIconBrightness:
                  Brightness.dark, // For Android (dark icons)
              statusBarBrightness: Brightness.light, // For iOS (dark icons)
            ),
            centerTitle: true,
            foregroundColor: Colors.black,
            leading: IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () {
                globalKey.currentState?.openDrawer();
              },
            ),
            actions: [
              IconButton(
                icon: const Icon(Icons.person),
                onPressed: () {},
              ),
            ],
            title: Text(
              "Welcome Back!",
              style: TextStyle(color: black),
            ),
            backgroundColor: Colors.transparent,
            elevation: 0.0,
            bottom: PreferredSize(
              preferredSize: Size.fromHeight(height * 0.15),
              child: Padding(
                padding: EdgeInsets.all(width * 0.035),
                child: Column(
                  children: [
                    SearchBar(heigth: height * 0.07, width: width),
                    SizedBox(height: height * 0.02),
                    tagsSection(height * 0.04, width * 0.22),
                  ],
                ),
              ),
            )),
        body: listPosts(height, width, posts));
    // body: ListView(
    //   children: [
    //     PostReviewCard(
    //       heigth: height * 0.35,
    //       width: width * 1,
    //       imageURL: '',
    //       padding: width * 0.03,
    //       created: '1h ago',
    //       subtitle: 'Why Big Data Sucks?',
    //       title: 'BIG DATA',
    //     ),
    //     PostReviewCard(
    //       heigth: height * 0.35,
    //       width: width * 1,
    //       imageURL: '',
    //       padding: 1,
    //       created: '1h ago',
    //       subtitle: 'Why Big Data Sucks?',
    //       title: 'BIG DATA',
    //     )
    //   ],
    // ));
  }

  ListView listPosts(double height, double width, List<PostCard> posts) {
    return ListView.builder(
        padding: EdgeInsets.all(width * 0.035),
        scrollDirection: Axis.vertical,
        itemCount: posts.length,
        itemBuilder: (BuildContext context, int index) {
          final post = posts[index];
          return post;
        });
  }

  Widget tagsSection(double height, double width) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        TagButton(
          heigth: height,
          width: width,
          topic: 'All',
        ),
        TagButton(
          heigth: height,
          width: width,
          topic: 'Sports',
        ),
        TagButton(
          heigth: height,
          width: width,
          topic: 'Tech',
        ),
        TagButton(
          heigth: height,
          width: width,
          topic: 'Politics',
        ),
      ],
    );
  }
}
