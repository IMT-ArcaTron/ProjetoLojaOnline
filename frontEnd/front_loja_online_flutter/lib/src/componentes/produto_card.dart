import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';
import 'package:front_loja_online_flutter/src/telas/produtos_tela.dart';
// import 'package:your_app/controllers/orders_context.dart';
// import 'package:your_app/models/product.dart';

class ProdutoCard extends StatelessWidget {
  final Product product;
  // final Function(int) addOrder;

  const ProdutoCard({
    super.key,
    required this.product,
    // required this.addOrder,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.all(10),
          child: Image.network(
            product.urlPhoto,
            width: 220,
          ),
        ),
        SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('${product.name} - R\$${product.price}'),
            ElevatedButton.icon(
              // onPressed: () => addOrder(product.code),
              onPressed: () => print('Adicionado ao carrinho'),
              icon: Icon(Icons.add_shopping_cart),
              label: Text('Adicionar ao carrinho'),
            ),
          ],
        ),
      ],
    );
  }
}
