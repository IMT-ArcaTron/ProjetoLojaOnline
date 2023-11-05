import 'package:flutter/material.dart';
import 'bloc.dart';

class Provider extends InheritedWidget {
  Provider({Key? key, required Widget child}) : super(key: key, child: child);

  final bloc = Bloc();

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static Bloc of(BuildContext context) {
//o operador ! garante que a expressão que o antecede
// (context.dependOnInheritedWidgetOfExactType<Provider>(), neste caso) é diferente
// de null podemos acessar a propriedade bloc sem casting pois a classe é genérica
// (informamos o tipo <Provider>)
    return context.dependOnInheritedWidgetOfExactType<Provider>()!.bloc;
  }
}
