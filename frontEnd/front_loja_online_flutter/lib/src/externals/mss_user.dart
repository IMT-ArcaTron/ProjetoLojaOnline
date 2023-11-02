import 'package:dio/dio.dart';

class MssUser {
  final Dio _dio = Dio();

  Future<int?> login(String email, String password) async {
    try {
      Response response = await _dio.post(
        'http://localhost:3005/login',
        data: {
          'email': email,
          'password': password,
        },
      );
      print(response.data);
      return response.statusCode; // Retorna o status code
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
