import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/carrinho_bloc.dart';

class SucessoTela extends StatelessWidget {
  const SucessoTela({super.key});

  @override
  Widget build(BuildContext context) {
    final carrinhoBloc = CarrinhoBloc(); // Instancia o bloc
    carrinhoBloc.getAllOrders(); // Chama o método para obter os produtos
    carrinhoBloc.getTotal(carrinhoBloc.allOrders);
    return Scaffold(
        appBar: AppBar(
          title: const Text(''),
        ),
        body: const Padding(
          padding: EdgeInsets.all(28.0),
          child: Center(
              child: Text(
            "Sua compra foi finalizada com sucesso!",
            style: TextStyle(fontWeight: FontWeight.bold),
          )),
        ));
  }
}
