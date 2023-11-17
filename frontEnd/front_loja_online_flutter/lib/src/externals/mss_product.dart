import 'package:dio/dio.dart';

class MssProduct {
  final Dio _dio = Dio();

  Future getAllProducts() async {
    try {
      Response response = await _dio.get('http://localhost:3006/products');
      return response.data; // Retorna o status code
    } catch (e) {
      print(e);
      // ignore: deprecated_member_use
      if (e is DioError) {
        return e.response?.statusCode; // Retorna o status code do erro
      }
      return null;
    }
  }

  Future getAllOrders() async {
    try {
      Response response = await _dio.get('http://localhost:3006/orders');
      return response.data; // Retorna o status code
    } catch (e) {
      print(e);
      // ignore: deprecated_member_use
      if (e is DioError) {
        return e.response?.statusCode; // Retorna o status code do erro
      }
      return null;
    }
  }

  Future addToOrders(productCode) async {
    try {
      Response response = await _dio.post(
        'http://localhost:3006/orders',
        data: {"productCode": productCode},
      );
      return response; // Retorna o status code
    } catch (e) {
      print(e);
      // ignore: deprecated_member_use
      if (e is DioError) {
        return e.response?.statusCode; // Retorna o status code do erro
      }
      return null;
    }
  }

  Future removeFromOrders(productCode) async {
    try {
      Response response = await _dio.delete(
        'http://localhost:3006/orders',
        data: {"productCode": productCode},
      );
      return response; // Retorna o status code
    } catch (e) {
      print(e);
      // ignore: deprecated_member_use
      if (e is DioError) {
        return e.response?.statusCode; // Retorna o status code do erro
      }
      return null;
    }
  }
}
