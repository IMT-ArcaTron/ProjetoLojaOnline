import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/bloc.dart';

class LoginTela extends StatelessWidget {
  final bloc = Bloc();

  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  LoginTela({super.key}) {
    emailController.addListener(() {
      bloc.changeEmail(emailController.text);
    });
    passwordController.addListener(() {
      bloc.changePassword(passwordController.text);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      //20 pixels de margem esquerda, direita, em cima e embaixo
      margin: const EdgeInsets.all(20.0),
      child: Column(
        children: [
          emailField(),
          passwordField(),
          Container(
            margin: const EdgeInsets.only(top: 12.0),
            child: Row(children: [Expanded(child: submitButton())]),
          ),
          StreamBuilder<bool>(
            stream: bloc.isLogged,
            builder: (context, snapshot) {
              if (snapshot.hasData && snapshot.data!) {
                return Text('LOGADO');
              } else {
                return Text('DESLOGADO');
              }
            },
          )
        ],
      ),
    );
  }

  Widget emailField() {
    return TextField(
      controller: emailController,
      keyboardType: TextInputType.emailAddress,
      decoration: const InputDecoration(
        //dica que aparece quando o usuário clica
        hintText: 'seu@email.com',
        //rótulo flutuante: usuário clica, ele sobe
        labelText: 'Endereço de email',
      ),
    );
  }

  Widget passwordField() {
    return TextField(
      controller: passwordController,
      obscureText: true,
      decoration: const InputDecoration(hintText: 'Senha', labelText: 'Senha'),
    );
  }

  Widget submitButton() {
    return ElevatedButton(
      onPressed: () {
        bloc.login();
      },
      child: const Text("Login"),
    );
  }
}
