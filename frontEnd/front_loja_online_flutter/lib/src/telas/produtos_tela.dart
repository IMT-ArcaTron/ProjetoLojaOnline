import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/blocs/produtos_bloc.dart';
import 'package:front_loja_online_flutter/src/componentes/produto_card.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';

class ProdutosTela extends StatelessWidget {
  const ProdutosTela({Key? key});

  @override
  Widget build(BuildContext context) {
    final produtosBloc = ProdutosBloc(); // Instancia o bloc
    produtosBloc.getAllProducts(); // Chama o método para obter os produtos

    return Scaffold(
      appBar: AppBar(
        title: Text('Produtos'),
      ),
      body: Column(
        children: [
          Container(
            padding: EdgeInsets.all(20),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Produtos',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
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
                        padding: EdgeInsets.all(10),
                        child: ProdutoCard(
                          product: product,
                        ),
                      );
                    },
                  ),
                );
              } else if (snapshot.hasError) {
                return Text('Erro ao obter produtos');
              } else {
                return CircularProgressIndicator();
              }
            },
          ),
        ],
      ),
    );
  }
}
