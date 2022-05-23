import 'package:flutter/material.dart';

const double buttonSize = 25;

class LinearFlowWidget extends StatefulWidget {
  final BuildContext context;
  const LinearFlowWidget({Key? key, required this.context}) : super(key: key);
  @override
  State<LinearFlowWidget> createState() => _LinearFlowWidgetState();
}

class _LinearFlowWidgetState extends State<LinearFlowWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController controller;

  @override
  void initState() {
    super.initState();

    controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 200),
    );
  }

  @override
  void dispose() {
    controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    context = this.context;
    return Flow(
      delegate: FlowMenuDelegate(controller: controller),
      children: const <IconData>[
        Icons.menu,
        Icons.image,
        Icons.video_call,
        Icons.attachment,
        Icons.mail,
      ].map<Widget>(buildItem).toList(),
    );
  }

  Widget buildItem(IconData icon) => Container(
        color: Colors.black,
        child: IconButton(
          // elevation: 0,
          iconSize: 55,
          color: Colors.deepOrange,
          focusColor: Colors.black,
          splashColor: Colors.black,
          icon: Icon(
            icon,
            color: Colors.white,
            size: buttonSize,
          ),
          onPressed: () {
            if (controller.status == AnimationStatus.completed) {
              controller.reverse();
            } else {
              controller.forward();
            }
          },
        ),
      );
}

class FlowMenuDelegate extends FlowDelegate {
  final Animation<double> controller;

  const FlowMenuDelegate({required this.controller})
      : super(repaint: controller);
  @override
  void paintChildren(FlowPaintingContext context) {
    final size = context.size;
    final xStart = size.width - buttonSize - 100;
    final yStart = size.height - buttonSize - 100;

    for (int i = context.childCount - 1; i >= 0; i--) {
      const margin = 2;
      final childSize = context.getChildSize(i)!.width;
      final dx = (childSize + margin) * i;
      final x = xStart - dx * controller.value;
      final y = yStart - 120;

      context.paintChild(
        i,
        transform: Matrix4.translationValues(x, y, 0),
      );
    }
  }

  @override
  bool shouldRepaint(FlowMenuDelegate oldDelegate) => false;
}
