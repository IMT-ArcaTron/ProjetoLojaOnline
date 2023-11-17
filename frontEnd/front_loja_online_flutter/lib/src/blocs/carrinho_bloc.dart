import 'dart:async';
import 'package:front_loja_online_flutter/src/blocs/validators.dart';
import 'package:front_loja_online_flutter/src/externals/mss_product.dart';

import '../entities/order.dart';

class CarrinhoBloc with Validators {
  final _ordersController = StreamController<List<Order>>();
  final _totalController = StreamController<double>();

  Stream<List<Order>> get allOrders => _ordersController.stream;
  Stream<double> get total => _totalController.stream;

  late List<Order> _allOrders;
  late double _total;

  final _mssOrders = MssProduct();

  Function(List<Order>) get changeOrders => (List<Order> orders) {
        _ordersController.sink.add(orders);
        _allOrders = orders;
      };

  Function(double) get changeTotal => (double total) {
        _totalController.sink.add(total);
        _total = total;
      };

  Future<List<Order>> getAllOrders() async {
    try {
      List<dynamic> res = [];
      res = await _mssOrders.getAllOrders();
      var orders = Order.listFromJson(res);
      changeOrders(orders);
      getTotal(orders);
      return orders;
    } catch (e) {
      print(e);
      return [];
    }
  }

  Future<List<Order>> addToOrders(int productCode) async {
    try {
      await _mssOrders.addToOrders(productCode);
      return getAllOrders();
    } catch (e) {
      print(e);
      return [];
    }
  }

  Future<List<Order>> removeFromOrders(int productCode) async {
    try {
      await _mssOrders.removeFromOrders(productCode);
      return getAllOrders();
    } catch (e) {
      print(e);
      return [];
    }
  }

  Future<double> getTotal(orders) async {
    var total = 0.0;
    if (_allOrders.isNotEmpty) {
      for (var i = 0; i < orders.length; i++) {
        total += orders[i].product.price * orders[i].quantity;
      }
    }
    changeTotal(total);
    return total;
  }

  void dispose() {
    _ordersController.close();
  }
}
