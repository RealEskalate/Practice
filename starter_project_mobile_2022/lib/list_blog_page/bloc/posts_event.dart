part of 'posts_bloc.dart';

abstract class PostsEvent extends Equatable {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class GetAllPostsEvent extends PostsEvent {}
