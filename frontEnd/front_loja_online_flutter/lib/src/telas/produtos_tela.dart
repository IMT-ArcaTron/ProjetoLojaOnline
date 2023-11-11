import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/componentes/produto_card.dart';

class ProdutosTela extends StatelessWidget {
  const ProdutosTela({super.key});

  @override
  Widget build(BuildContext context) {
    // final allProducts = ProductContext.of(context).allProducts;
    // final addOrder = OrdersContext.of(context).addOrder;
    final allProducts = <Product>[
      Product(
        code: 1,
        name: 'Produto 1',
        urlPhoto: 'https://picsum.photos/200/300',
        price: 10.0,
      ),
      Product(
        code: 2,
        name: 'Produto 2',
        urlPhoto: 'https://picsum.photos/200/300',
        price: 20.0,
      ),
    ];

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
                // Toast(),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: allProducts.length,
              itemBuilder: (context, index) {
                final product = allProducts[index];
                return Padding(
                  padding: EdgeInsets.all(10),
                  child: ProdutoCard(
                    product: product,
                    // addOrder: addOrder,
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class Product {
  final int code;
  final String name;
  final String urlPhoto;
  final double price;

  Product({
    required this.code,
    required this.name,
    required this.urlPhoto,
    required this.price,
  });
}
