part of 'posts_bloc.dart';

abstract class PostsState extends Equatable {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class PostsInitial extends PostsState {}

class PostsLoading extends PostsState {}

class PostsSuccess extends PostsState {
  final List<Article> articles;
  PostsSuccess({required this.articles});
}

class PostsError extends PostsState {}
