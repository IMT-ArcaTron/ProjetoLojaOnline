import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/login_bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/provider.dart';
import 'package:front_loja_online_flutter/src/telas/produtos_tela.dart';
import 'package:front_loja_online_flutter/src/telas/registro_tela.dart';

class LoginTela extends StatelessWidget {
  const LoginTela({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final bloc = LoginProvider.of(context);

    return ValueListenableBuilder<bool>(
      valueListenable: bloc.isLogged,
      builder: (context, isLogged, _) {
        if (isLogged) {
          WidgetsBinding.instance?.addPostFrameCallback((_) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const ProdutosTela()),
            );
          });
        }

        return buildLoginForm(context, bloc, isLogged);
      },
    );
  }

  Widget buildLoginForm(BuildContext context, LoginBloc bloc, bool isLogged) {
    // bloc.reset(); // Reinicia o estado do Stream

    return Container(
      margin: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          Image.asset('assets/images/logo.png'),
          emailField(context, bloc),
          passwordField(context, bloc),
          Container(
            margin: const EdgeInsets.only(top: 12.0),
            child: Row(
              children: [
                Expanded(child: submitButton(context, bloc)),
              ],
            ),
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
  }

  Widget emailField(BuildContext context, LoginBloc bloc) {
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

  Widget passwordField(BuildContext context, LoginBloc bloc) {
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

  Widget submitButton(BuildContext context, LoginBloc bloc) {
    return ElevatedButton(
      onPressed: bloc.login,
      child: const Text('Login'),
    );
  }
}
