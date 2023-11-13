import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/provider.dart';
import 'package:front_loja_online_flutter/src/blocs/registro_bloc.dart';

class RegistroTela extends StatelessWidget {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  RegistroTela({super.key});

  @override
  Widget build(BuildContext context) {
    final bloc = RegistroProvider.of(context);
    return Scaffold(
        appBar: AppBar(
          title: Text('Cadastro de Conta'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              nameField(),
              phoneField(),
              addressFied(),
              emailField(),
              passwordField(),
              Container(
                  margin: const EdgeInsets.only(top: 12.0),
                  child: Row(children: [
                    Expanded(child: submitButton(bloc)),
                  ])),
              StreamBuilder<String>(
                stream: bloc.userMessageRegister,
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
              TextButton(
                onPressed: () {
                  // Navegar de volta para a tela de login
                  Navigator.pop(context);
                },
                child: const Text(
                  'Entrar',
                  style: TextStyle(color: Colors.blue),
                ),
              ),
            ],
          ),
        ));
  }

  Widget nameField() {
    return TextField(
      controller: _nameController,
      decoration:
          const InputDecoration(labelText: 'Nome', hintText: 'Fulano Silva'),
    );
  }

  Widget phoneField() {
    return TextField(
      controller: _phoneController,
      decoration: const InputDecoration(
          labelText: 'Telefone', hintText: '(XX) xxxxx-xxxx'),
    );
  }

  Widget addressFied() {
    return TextField(
      controller: _addressController,
      decoration: const InputDecoration(
          labelText: 'Endereço', hintText: 'Rua dos Limoeiros, 110'),
    );
  }

  Widget emailField() {
    return TextField(
      controller: _emailController,
      decoration:
          const InputDecoration(labelText: 'Email', hintText: 'seu@email.com'),
    );
  }
  // Widget emailField(Bloc bloc) {
  //   return StreamBuilder(
  //     //stream que, quando atualizado, produz um snapshot
  //     //observe como usamos o stream definido no bloc
  //     stream: bloc.email,
  //     //função que, quando chamada, causa a atualização do Widget (TextField,neste caso) empacotado pelo StreamBuilder
  //     builder: ((context, AsyncSnapshot<String> snapshot) {
  //       return TextField(
  //         onChanged: (newValue) {
  //           bloc.changeEmail(newValue);
  //         },
  //         keyboardType: TextInputType.emailAddress,
  //         decoration: InputDecoration(
  //             //dica que aparece quando o usuário clica
  //             hintText: 'seu@email.com',
  //             //rótulo flutuante: usuário clica, ele "sobe"
  //             labelText: 'Endereço de e-mail',
  //             // o erro não necessariamente é String, por isso seu tipo é Object?, dai o uso de toString()
  //             errorText: snapshot.hasError ? snapshot.error.toString() : null),
  //       );
  //     }),
  //   );
  // }

  Widget passwordField() {
    return TextField(
      controller: _passwordController,
      obscureText: true,
      decoration: const InputDecoration(labelText: 'Senha', hintText: 'Senha'),
    );
  }
  // Widget passwordField(Bloc bloc) {
  //   return StreamBuilder(
  //     stream: bloc.password,
  //     builder: (context, AsyncSnapshot<String> snapshot) {
  //       return TextField(
  //         onChanged: bloc.changePassword,
  //         obscureText: true,
  //         decoration: InputDecoration(
  //             hintText: "Senha",
  //             labelText: "Senha",
  //             errorText: snapshot.hasError ? snapshot.error.toString() : null),
  //       );
  //     },
  //   );
  // }

  Widget submitButton(RegistroBloc bloc) {
    return ElevatedButton(
      onPressed: () {
        final name = _nameController.text;
        final phone = _phoneController.text;
        final address = _addressController.text;
        final email = _emailController.text;
        final password = _passwordController.text;

        bloc.register(name, phone, address, email, password);

        print('Nome: $name');
        print('Telefone: $phone');
        print('Endereço: $address');
        print('Email: $email');
        print('Senha: $password');
      },
      child: const Text('Registrar'),
    );
  }
}
