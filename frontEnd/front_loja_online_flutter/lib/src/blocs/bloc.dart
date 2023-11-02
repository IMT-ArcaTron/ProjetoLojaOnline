import 'dart:async';
import 'package:front_loja_online_flutter/src/blocs/validators.dart';
import 'package:front_loja_online_flutter/src/externals/mss_user.dart';

class Bloc with Validators {
  final _emailController = StreamController<String>();
  final _passwordController = StreamController<String>();
  final _isLoggedController = StreamController<bool>();

  late String _email;
  late String _password;
  late bool _isLogged = false;

  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);
  Stream<bool> get isLogged => _isLoggedController.stream;

  Function(String) get changeEmail => (String email) {
        _emailController.sink.add(email);
        _email = email;
      };

  Function(String) get changePassword => (String password) {
        _passwordController.sink.add(password);
        _password = password;
      };

  final _mssUser = MssUser();

  Future<void> login() async {
    try {
      int? res = 0;
      res = await _mssUser.login(_email, _password);
      print("resposta:");
      print(res);
      if (res == 200) {
        _isLogged = true;
        _isLoggedController.sink.add(_isLogged);
      } else {
        _isLogged = false;
        _isLoggedController.sink.add(_isLogged);
      }
    } catch (e) {
      _isLogged = false;
      _isLoggedController.sink.add(_isLogged);
      print(e);
    }
  }

  void dispose() {
    _emailController.close();
    _passwordController.close();
    _isLoggedController.close();
  }
}
