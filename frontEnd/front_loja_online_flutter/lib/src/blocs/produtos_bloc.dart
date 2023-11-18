import 'dart:async';
import 'package:front_loja_online_flutter/src/blocs/validators.dart';
import 'package:front_loja_online_flutter/src/entities/product.dart';
import 'package:front_loja_online_flutter/src/externals/mss_product.dart';
import 'package:front_loja_online_flutter/src/externals/mss_user.dart';
import 'package:flutter/foundation.dart';

class ProdutosBloc with Validators {
  final _productsController = StreamController<List<Product>>();

  Stream<List<Product>> get allProducts => _productsController.stream;

  late List<Product> _allProducts;

  final _mssProduct = MssProduct();

  Function(List<Product>) get changeProducts => (List<Product> products) {
        _productsController.sink.add(products);
        _allProducts = products;
      };

  Future<List<Product>> getAllProducts() async {
    try {
      List<dynamic> res = [];
      res = await _mssProduct.getAllProducts();
      var products = Product.listFromJson(res);
      changeProducts(products);
      return products;
    } catch (e) {
      print(e);
      return [];
    }
  }

  void dispose() {
    _productsController.close();
  }
}
