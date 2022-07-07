import 'package:starter_project_mobile_2022/list_blog_page/data_provider/blog_data_provider.dart';

import '../model/article.dart';

class BlogRepository {
  Future<List<Article>> getAllBlogPosts() async {
    BlogDataProvider blogDataProvider = BlogDataProvider();
    return await blogDataProvider.getArticles();
  }
}
