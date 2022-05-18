import 'package:flutter/material.dart';

import '../blog_suha/presentation/list_blog_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const BlogListingPage(
      title: 'Blog Listing',
    );
  }
}
