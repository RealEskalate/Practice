import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile_2022/list_blog_page/model/article.dart';
import '../bloc/posts_bloc.dart';
import '../constants/colors.dart';
import '../data_provider/blog_data_provider.dart';
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

  BlogDataProvider blogDataProvider = BlogDataProvider();

  @override
  Widget build(BuildContext context) {
    final double height = MediaQuery.of(context).size.height;
    final double width = MediaQuery.of(context).size.width;

    // final List<PostCard> posts = [
    //   PostCard(
    //     created: '2d ago',
    //     description:
    //         'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
    //     // heigth: height * 0.37, // For IOS
    //     heigth: height * 0.411,
    //     width: width * 0.93,
    //     padding: width * 0.03,
    //     icon: Icons.person,
    //     image: Icons.texture_sharp,
    //     numOfComments: '16',
    //     numOfStars: 2,
    //     title: 'Adrian Smith',
    //   ),
    //   PostCard(
    //     created: '2d ago',
    //     description:
    //         'Daily Facebook users up again after decline But Facebook owner Meta is struggling with',
    //     heigth: height * 0.411,
    //     width: width * 0.93,
    //     padding: width * 0.03,
    //     icon: Icons.person,
    //     image: Icons.texture_sharp,
    //     numOfComments: '16',
    //     numOfStars: 4,
    //     title: 'Adrian Smith',
    //   ),
    // ];

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
            preferredSize: Size.fromHeight(height * 0.14),
            child: Padding(
              padding: EdgeInsets.only(
                  left: width * 0.035,
                  right: width * 0.035,
                  bottom: width * 0.035),
              child: Column(
                children: [
                  SearchBar(heigth: height * 0.07, width: width),
                  SizedBox(height: height * 0.02),
                  tagsSection(height * 0.04, width * 0.22),
                ],
              ),
            ),
          )),
      body: BlocProvider(
        create: (context) => PostsBloc(),
        child: BlocBuilder<PostsBloc, PostsState>(
          builder: (context, state) {
            if (state is PostsInitial) {
              context.read<PostsBloc>().add(GetAllPostsEvent());
            } else if (state is PostsLoading) {
              return const Center(
                child: CircularProgressIndicator(
                  color: Colors.blue,
                ),
              );
            } else if (state is PostsSuccess) {
              return RefreshIndicator(
                  onRefresh: () async {
                    BlocProvider.of<PostsBloc>(context).add(
                      GetAllPostsEvent(),
                    );
                  },
                  child: listPosts(height, width, state.articles));
            }
            return const Center(
              child: Text('No Data Loaded! BLoC Error!s'),
            );
          },
        ),
      ),
      // body: FutureBuilder(
      //   future: blogDataProvider.getArticles(),
      //   initialData: null,
      //   builder: (BuildContext context, AsyncSnapshot snapshot) {
      //     if (snapshot.hasData) {
      //       return listPosts(height, width, snapshot.data);
      //     }
      //     return const Center(
      //       child: Text("Data Not Found!"),
      //     );
      //   },
      // ),
    );
  }

  ListView listPosts(double height, double width, List<Article> articles) {
    return ListView.builder(
        padding: EdgeInsets.all(width * 0.035),
        scrollDirection: Axis.vertical,
        itemCount: articles.length,
        itemBuilder: (BuildContext context, int index) {
          final article = articles[index];
          return PostCard(
            created: article.createdAt,
            description: article.description,
            heigth: height * 0.411,
            width: width * 0.93,
            padding: width * 0.03,
            icon: Icons.person,
            image: Icons.texture_sharp,
            numOfComments: '16',
            numOfStars: article.rating.length,
            title: article.title,
          );
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
