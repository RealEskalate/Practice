import 'package:http/http.dart' as http;
import '../models/todo.dart';
import 'dart:async';
import 'dart:convert';

class TodoData{
  Future<Todo> fetchTodo(http.Client client) async{
    final response = await client.get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));

    if(response.statusCode == 200){
      return Todo.fromJson(jsonDecode(response.body));
    }else{
      throw Exception('Failed to load Todo');
    }
  }



}
