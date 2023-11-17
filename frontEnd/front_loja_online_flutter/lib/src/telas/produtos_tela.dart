import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/carrinho_bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/login_bloc.dart';
import 'package:front_loja_online_flutter/src/blocs/produtos_bloc.dart';
import 'package:front_loja_online_flutter/src/componentes/produto_card.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';
import 'package:front_loja_online_flutter/src/telas/carrinho_tela.dart';
import 'package:front_loja_online_flutter/src/telas/login_tela.dart';

class ProdutosTela extends StatelessWidget {
  const ProdutosTela({super.key});

  @override
  Widget build(BuildContext context) {
    final produtosBloc = ProdutosBloc();
    final carrinhoBloc = CarrinhoBloc();
    final loginBloc = LoginBloc();
    produtosBloc.getAllProducts(); // Chama o método para obter os produtos

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Produtos'),
      ),
      floatingActionButton: Padding(
        padding: EdgeInsets.only(
            bottom: MediaQuery.of(context).size.height * 0.6, right: 20),
        child: Column(
          children: [
            const SizedBox(
              height: 80,
            ),
            FloatingActionButton(
              onPressed: () => {loginBloc.logout()},
              child: const Icon(Icons.exit_to_app),
            ),
            const SizedBox(
              height: 10,
            ),
            FloatingActionButton(
              onPressed: () => {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const CarrinhoTela()),
                )
              },
              child: const Icon(Icons.shopping_cart),
            ),
          ],
        ),
        // ),
      ),
      body: Column(
        children: [
          StreamBuilder<List<Product>>(
            stream:
                produtosBloc.allProducts, // Obtém o stream de produtos do bloc
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                final allProducts =
                    snapshot.data!; // Obtém a lista de produtos do snapshot

                return Expanded(
                  child: ListView.builder(
                    itemCount: allProducts.length,
                    itemBuilder: (context, index) {
                      final product = allProducts[index];
                      return Padding(
                        padding: const EdgeInsets.all(10),
                        child: ProdutoCard(
                          addOrRemoveOrder: carrinhoBloc.addToOrders,
                          isOnOrders: false,
                          product: product,
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
