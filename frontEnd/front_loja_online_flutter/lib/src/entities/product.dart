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

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      code: int.parse(json['code'] as String),
      name: json['name'] as String,
      urlPhoto: json['urlPhoto'] as String,
      price: json['price'] as double,
    );
  }

  static List<Product> listFromJson(List<dynamic> json) {
    return json
        .map((item) => Product.fromJson(item as Map<String, dynamic>))
        .toList();
  }
}
