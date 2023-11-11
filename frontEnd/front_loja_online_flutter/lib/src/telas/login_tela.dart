import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/provider.dart';
import 'package:front_loja_online_flutter/src/telas/produtos_tela.dart';
import 'package:front_loja_online_flutter/src/telas/registro_tela.dart';

class LoginTela extends StatelessWidget {
  const LoginTela({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final bloc = Provider.of(context);

    return ValueListenableBuilder<bool>(
      valueListenable: bloc.isLogged,
      builder: (context, isLogged, _) {
        if (isLogged) {
          WidgetsBinding.instance?.addPostFrameCallback((_) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => ProdutosTela()),
            );
          });
        }

        return Container(
          //20 pixels de margem esquerda, direita, em cima e embaixo
          margin: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              Image.asset('assets/images/logo.png'),
              emailField(bloc),
              passwordField(bloc),
              Container(
                margin: const EdgeInsets.only(top: 12.0),
                child: Row(
                  children: [
                    Expanded(child: submitButton(bloc)),
                  ],
                ),
              ),
              Text(
                isLogged ? 'debug: LOGADO' : 'debug: DESLOGADO',
              ),
              TextButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => RegistroTela()),
                  );
                },
                child: Text("Ainda não possui login? Registre-se"),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget emailField(Bloc bloc) {
    return StreamBuilder<String>(
      stream: bloc.email,
      builder: (context, snapshot) {
        return TextField(
          onChanged: bloc.changeEmail,
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
            hintText: 'seu@email.com',
            labelText: 'Endereço de e-mail',
            errorText: snapshot.hasError ? snapshot.error.toString() : null,
          ),
        );
      },
    );
  }

  Widget passwordField(Bloc bloc) {
    return StreamBuilder<String>(
      stream: bloc.password,
      builder: (context, snapshot) {
        return TextField(
          onChanged: bloc.changePassword,
          obscureText: true,
          decoration: InputDecoration(
            hintText: "Senha",
            labelText: "Senha",
            errorText: snapshot.hasError ? snapshot.error.toString() : null,
          ),
        );
      },
    );
  }

  Widget submitButton(Bloc bloc) {
    return ElevatedButton(
      onPressed: bloc.login,
      child: const Text('Login'),
    );
  }
}
