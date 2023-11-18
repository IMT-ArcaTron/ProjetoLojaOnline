import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/telas/login_tela.dart';
import 'package:front_loja_online_flutter/src/blocs/provider.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    // empacotar MaterialApp com um provider
    return MaterialApp(
        home: RegistroProvider(
      child: LoginProvider(
          child: ProdutosProvider(
        child: const MaterialApp(
            title: 'Login',
            home: Scaffold(
              body: LoginTela(),
            )),
      )),
    ));
  }
}
