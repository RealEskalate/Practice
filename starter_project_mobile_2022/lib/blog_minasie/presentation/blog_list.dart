import 'package:flutter/material.dart';
import 'package:stacked_card_carousel/stacked_card_carousel.dart';
import 'package:starter_project_mobile_2022/blog_minasie/presentation/style_card.dart';

class BlogListingAppMinasie extends StatefulWidget {
  static const pageRoute = "/minasie_blog_listing";

  const BlogListingAppMinasie({Key? key}) : super(key: key);
  @override
  _StackedCardDemoState createState() => _StackedCardDemoState();
}

class _StackedCardDemoState extends State<BlogListingAppMinasie> {
  final List<Widget> styleCards = [
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Team Leader",
      description:
          "It play extremely important role in motivating\nour team and ensuring their success.",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Secondary Team Leader ",
      description:
          "It provides guidance, instruction, direction to\nour team. Handsome member in our team.",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Software Engineer",
      description:
          "Team player, hard worker, expert in\n both andriod and flutter",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Software Engineer",
      description: "Smart, quick learner, and very\ndedicated to the work.",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Associate Software Engineer",
      description:
          "Flutter developer, keen learner\n very supporting. Bodyguard of our team",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Associate Software Engineer",
      description:
          "Responsible team member,situation handler,\nand a sharp learner with flutter and blogs.",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Associate Software Engineer",
      description:
          "Flutter developer with a passion for learning,\nstar blogger, punctual and \na handsome teammate.",
    ),
    StyleCard(
      image: Image.asset("assets/image.jpg"),
      title: "Associate Software Engineer",
      description:
          "Newest team member, with high passion for\nlearning very sharp,and dedicated.Need more\ntime to know about you.",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Stacked Card Carousel Demo'),
      ),
      body: StackedCardCarousel(
        initialOffset: 40,
        spaceBetweenItems: 400,
        items: styleCards,
      ),
    );
  }
}
