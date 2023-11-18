import 'package:front_loja_online_flutter/src/entities/product.dart';

class Order {
  final Product product;
  final int quantity;

  Order({
    required this.product,
    required this.quantity,
  });

  factory Order.fromJson(Map<String, dynamic> json) {
    print(json);
    return Order(
        product: Product(
          // code: 0,
          code: int.parse(json['product'][0]['code'] as String),
          name: json['product'][0]['name'] as String,
          urlPhoto: json['product'][0]['urlPhoto'] as String,
          price: json['product'][0]['price'] as double,
        ),
        quantity: json['quantity']);
  }

  static List<Order> listFromJson(List<dynamic> json) {
    return json
        .map((item) => Order.fromJson(item as Map<String, dynamic>))
        .toList();
  }
}
