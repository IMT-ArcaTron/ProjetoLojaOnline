import 'package:flutter/material.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';

class ProdutoCard extends StatelessWidget {
  final Product product;
  final bool isOnOrders;
  final Function(int) addOrRemoveOrder;

  const ProdutoCard({
    super.key,
    required this.product,
    required this.isOnOrders,
    required this.addOrRemoveOrder,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(10),
          child: Image.network(
            product.urlPhoto,
            width: 220,
          ),
        ),
        const SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('${product.name} - R\$${product.price}'),
            const SizedBox(width: 10),
            ElevatedButton.icon(
              // onPressed: () => addOrder(product.code),
              onPressed: () => addOrRemoveOrder(product.code),
              icon: isOnOrders
                  ? const Icon(Icons.remove_shopping_cart)
                  : const Icon(Icons.add_shopping_cart),
              label: isOnOrders
                  ? const Text('Remover do carrinho')
                  : const Text('Adicionar ao carrinho'),
            ),
          ],
        ),
      ],
    );
  }
}
