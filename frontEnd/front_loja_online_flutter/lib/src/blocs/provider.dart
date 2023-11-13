import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/produtos_bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/registro_bloc.dart';
import 'login_bloc.dart';

class LoginProvider extends InheritedWidget {
  LoginProvider({Key? key, required Widget child})
      : super(key: key, child: child);

  final bloc = LoginBloc();

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static LoginBloc of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<LoginProvider>()!.bloc;
  }
}

class RegistroProvider extends InheritedWidget {
  RegistroProvider({Key? key, required Widget child})
      : super(key: key, child: child);

  final bloc = RegistroBloc();

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static RegistroBloc of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<RegistroProvider>()!.bloc;
  }
}

class ProdutosProvider extends InheritedWidget {
  ProdutosProvider({Key? key, required Widget child})
      : super(key: key, child: child);

  final bloc = ProdutosBloc();

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static ProdutosBloc of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ProdutosProvider>()!.bloc;
  }
}
