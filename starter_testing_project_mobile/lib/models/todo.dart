<<<<<<< HEAD
class Todo {
=======
class Todo{
>>>>>>> [Mobile] Add files to starter testing project
  final int userId;
  final int id;
  final String title;
  final bool completed;

<<<<<<< HEAD
  const Todo(
      {required this.userId,
      required this.id,
      required this.title,
      required this.completed});

  factory Todo.fromJson(Map<String, dynamic> json) {
=======
  Todo({required this.userId,required this.id, required this.title, required this.completed});
    factory Todo.fromJson(Map<String, dynamic> json) {
>>>>>>> [Mobile] Add files to starter testing project
    return Todo(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
      completed: json['completed'],
    );
  }
<<<<<<< HEAD
}
=======

  
}
>>>>>>> [Mobile] Add files to starter testing project
