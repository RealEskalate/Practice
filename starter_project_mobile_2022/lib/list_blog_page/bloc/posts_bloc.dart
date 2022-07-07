import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_project_mobile_2022/list_blog_page/model/article.dart';

import '../repository/blog_repository.dart';

part 'posts_event.dart';
part 'posts_state.dart';

class PostsBloc extends Bloc<PostsEvent, PostsState> {
  PostsBloc() : super(PostsInitial()) {
    on<PostsEvent>((event, emit) async {
      if (event is GetAllPostsEvent) {
        emit(PostsLoading());
        try {
          final BlogRepository blogRepository = BlogRepository();
          List<Article> articles = await blogRepository.getAllBlogPosts();
          emit(PostsSuccess(articles: articles));
        } catch (e) {
          emit(PostsError());
          throw ("Couldn't fetch data! BLOC Error!" + e.toString());
        }
      }
    });
  }
}
