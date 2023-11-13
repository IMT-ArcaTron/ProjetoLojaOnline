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
}
