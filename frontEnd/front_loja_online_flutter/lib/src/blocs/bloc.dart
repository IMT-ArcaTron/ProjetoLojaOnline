import 'dart:async';
import 'dart:developer';
import 'package:front_loja_online_flutter/src/blocs/validators.dart';
import 'package:front_loja_online_flutter/src/externals/mss_user.dart';

class Bloc with Validators {
  final _emailController = StreamController<String>();
  final _passwordController = StreamController<String>();
  final _isLoggedController = StreamController<bool>();
  final _isRegisteredController = StreamController<bool>();
  final StreamController<String> _userMessageController =
      StreamController<String>.broadcast();
  final StreamController<String> _userMessageRegisterController =
      StreamController<String>.broadcast();

  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password => _passwordController.stream.transform(validatePassword);
  Stream<bool> get isLogged => _isLoggedController.stream;
  Stream<bool> get isRegistered=> _isRegisteredController.stream;
  Stream<String> get userMessage => _userMessageController.stream;
  Stream<String> get userMessageRegister => _userMessageRegisterController.stream;

  // late String _name;
  // late String _phone;
  // late String _address;
  late String _email;
  late String _password;
  late bool _isLogged = false;
  late bool _isRegistered = false;
  late final String _userMessage = 'placeholder';
  late final String _userMessageRegister = 'placeholder';


  final _mssUser = MssUser();

  Function(String) get changeEmail => (String email) {
        _emailController.sink.add(email);
        _email = email;
      };

  Function(String) get changePassword => (String password) {
        _passwordController.sink.add(password);
        _password = password;
      };

  Future<void> login() async {
    try {
      int? res = 0;
      res = await _mssUser.login(_email, _password);
      print("resposta:");
      print(res);
      if (res == 200) {
        _isLogged = true;
        _isLoggedController.sink.add(_isLogged);
        _userMessageController.sink.add("Login!");
      } else {
        _isLogged = false;
        _isLoggedController.sink.add(_isLogged);
        if (res == 401) {
          _userMessageController.sink.add("Email ou senha incorretos!");
        } else {
          _userMessageController.sink.add("Verifique o Microserviço!");
        }
      }
    } catch (e) {
      _isLogged = false;
      _isLoggedController.sink.add(_isLogged);
      // _userMessageController.sink.add("Erro durante o login: $e");
      print(e);
    }
  }


  Future<void> register(String regName, String regPhone, String regAddress, String regEmail, String regPassword) async {
    try {
      int? res = 0;
      res = await _mssUser.register(regName, regPhone, regAddress, regEmail, regPassword);
      print("resposta:");
      print(res);
      if (res == 201) {
        _isRegistered = true;
        _isRegisteredController.sink.add(_isRegistered);
        _userMessageRegisterController.sink.add("Registrado!");
      } else {
        _isRegistered = false;
        _isRegisteredController.sink.add(_isLogged);
        if (res == 403) {
          _userMessageRegisterController.sink.add("Usuario Já Existe!");
        } else {
          _userMessageRegisterController.sink.add("Verifique o Microserviço!");
        }
      }
    } catch (e) {
      _isLogged = false;
      _isLoggedController.sink.add(_isLogged);
      // _userMessageController.sink.add("Erro durante o login: $e");
      print(e);
    }
  }
}
