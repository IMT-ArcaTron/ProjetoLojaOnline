import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/carrinho_bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/produtos_bloc.dart';
import 'package:front_loja_online_flutter/src/componentes/produto_card.dart';
import 'package:front_loja_online_flutter/src/entities/order.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';
import 'package:front_loja_online_flutter/src/telas/sucesso.dart';

class CarrinhoTela extends StatelessWidget {
  const CarrinhoTela({super.key});

  @override
  Widget build(BuildContext context) {
    final carrinhoBloc = CarrinhoBloc(); // Instancia o bloc
    carrinhoBloc.getAllOrders(); // Chama o método para obter os produtos
    carrinhoBloc.getTotal(carrinhoBloc.allOrders);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Carrinho'),
      ),
      floatingActionButton: Padding(
        padding: EdgeInsets.only(
            bottom: MediaQuery.of(context).size.height * 0.79, right: 20),
        child: ElevatedButton(
          onPressed: () => {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const SucessoTela()),
            )
          },
          child: const Text('Finalizar compra'),
        ),
        // ),
      ),
      body: Column(
        children: [
          StreamBuilder<double>(
            stream: carrinhoBloc.total, // Obtém o stream de produtos do bloc
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                final total =
                    snapshot.data!; // Obtém a lista de produtos do snapshot
                return Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Total: R\$ $total'),
                );
              } else if (snapshot.hasError) {
                return const Text('');
              } else {
                return const CircularProgressIndicator();
              }
            },
          ),
          // Text('Total: ${carrinhoBloc.total}'),
          StreamBuilder<List<Order>>(
            stream:
                carrinhoBloc.allOrders, // Obtém o stream de produtos do bloc
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                final allOrders =
                    snapshot.data!; // Obtém a lista de produtos do snapshot
                if (allOrders.isEmpty) {
                  return const Padding(
                    padding: EdgeInsets.only(top: 20),
                    child: Center(
                        child: Text(
                      "Carrinho vazio :(",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    )),
                  );
                }
                return Expanded(
                  child: ListView.builder(
                    itemCount: allOrders.length,
                    itemBuilder: (context, index) {
                      final order = allOrders[index];
                      return Padding(
                        padding: const EdgeInsets.all(10),
                        child: Row(
                          children: [
                            ProdutoCard(
                              addOrRemoveOrder: carrinhoBloc.removeFromOrders,
                              isOnOrders: true,
                              product: order.product,
                            ),
                            Text("quantidade: ${order.quantity}")
                          ],
                        ),
                      );
                    },
                  ),
                );
              } else if (snapshot.hasError) {
                return const Text('Erro ao obter produtos');
              } else {
                return const CircularProgressIndicator();
              }
            },
          ),
        ],
      ),
    );
  }
}
