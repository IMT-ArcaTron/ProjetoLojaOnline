import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/provider.dart';
import 'package:front_loja_online_flutter/src/telas/registro_tela.dart';

class LoginTela extends StatelessWidget {
  const LoginTela({super.key});
  @override
  Widget build(BuildContext context) {
    final bloc = Provider.of(context);
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
              child: Row(children: [
                Expanded(child: submitButton(bloc)),
              ])),
          StreamBuilder<bool>(
            stream: bloc.isLogged,
            builder: (context, snapshot) {
              if (snapshot.hasData && snapshot.data!) {
                return const Text('debug: LOGADO');
              } else {
                return const Text('debug: DESLOGADO');
              }
            },
          ),
          StreamBuilder<String>(
            stream: bloc.userMessage,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                String texto = snapshot.hasData
                    ? snapshot.data ?? ""
                    : "Mensagem padrão em caso de falta de dados";
                return Text(texto);
              } else {
                return Text('');
              }
            },
          ),
          // Campo para registro
          TextButton(
            onPressed: () {
              // Navegar para a tela de registro
              Navigator.push(context, MaterialPageRoute(builder: (context) => RegistroTela()));
            },
            child: Text("Ainda não possui login? Registre-se"),
          ),
        ],
      ),
    );
  }

  Widget emailField(Bloc bloc) {
    return StreamBuilder(
      //stream que, quando atualizado, produz um snapshot
      //observe como usamos o stream definido no bloc
      stream: bloc.email,
      //função que, quando chamada, causa a atualização do Widget (TextField,neste caso) empacotado pelo StreamBuilder
      builder: ((context, AsyncSnapshot<String> snapshot) {
        return TextField(
          onChanged: (newValue) {
            bloc.changeEmail(newValue);
          },
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
              //dica que aparece quando o usuário clica
              hintText: 'seu@email.com',
              //rótulo flutuante: usuário clica, ele "sobe"
              labelText: 'Endereço de e-mail',
              // o erro não necessariamente é String, por isso seu tipo é Object?, dai o uso de toString()
              errorText: snapshot.hasError ? snapshot.error.toString() : null),
        );
      }),
    );
  }

  Widget passwordField(Bloc bloc) {
    return StreamBuilder(
      stream: bloc.password,
      builder: (context, AsyncSnapshot<String> snapshot) {
        return TextField(
          onChanged: bloc.changePassword,
          obscureText: true,
          decoration: InputDecoration(
              hintText: "Senha",
              labelText: "Senha",
              errorText: snapshot.hasError ? snapshot.error.toString() : null),
        );
      },
    );
  }

  Widget submitButton(Bloc bloc) {
    return ElevatedButton(
      onPressed: () {
        bloc.login();
      },
      child: const Text('Login'),
    );
  }
}
