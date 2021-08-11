part of 'qoute_bloc.dart';

class QouteState {
  static final _qoutes = <Qoute>[
    Qoute(
      author: "Dolly Parton",
      text:
          "The way I see it, if you want the rainbow, you gotta put up with the rain",
      illustration: "assets/illustration2.png",
    ),
    Qoute(
      author: "Albert Einstein",
      text: "Once you stop learning, you start dying.",
      illustration: "assets/illustration3.png",
    ),
    Qoute(
      author: "Collin Powell",
      text:
          "There are no secrets to success. It is the result of preparation, hard work and learning from failure.",
      illustration: "assets/illustration1.png",
    ),
  ];

  Qoute qoute;
  int index;

  static int get qoutesCount => _qoutes.length;

  QouteState({required this.index}) : this.qoute = _qoutes[index];
}
