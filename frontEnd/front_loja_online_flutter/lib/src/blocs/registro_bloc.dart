import 'dart:async';
import 'package:front_loja_online_flutter/src/blocs/validators.dart';
import 'package:front_loja_online_flutter/src/externals/mss_user.dart';
import 'package:flutter/foundation.dart';
import 'package:rxdart/rxdart.dart';

class RegistroBloc with Validators {
  final _emailController = BehaviorSubject<String>();
  final _passwordController = BehaviorSubject<String>();
  final ValueNotifier<bool> _isLoggedController = ValueNotifier<bool>(false);
  final _isRegisteredController = StreamController<bool>();
  final StreamController<String> _userMessageController =
      StreamController<String>.broadcast();
  final StreamController<String> _userMessageRegisterController =
      StreamController<String>.broadcast();

  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password =>
      _passwordController.stream.transform(validatePassword);
  ValueListenable<bool> get isLogged => _isLoggedController;
  Stream<bool> get isRegistered => _isRegisteredController.stream;
  Stream<String> get userMessage => _userMessageController.stream;
  Stream<String> get userMessageRegister =>
      _userMessageRegisterController.stream;

  late String _email;
  late String _password;
  late bool _isRegistered = false;
  late String _userMessage = 'placeholder';
  late String _userMessageRegister = 'placeholder';

  final _mssUser = MssUser();

  Function(String) get changeEmail => (String email) {
        _emailController.sink.add(email);
        _email = email;
      };

  Function(String) get changePassword => (String password) {
        _passwordController.sink.add(password);
        _password = password;
      };

  
  Future<void> register(String regName, String regPhone, String regAddress,
      String regEmail, String regPassword) async {
    try {
      int? res = 0;
      res = await _mssUser.register(
          regName, regPhone, regAddress, _email, _password);
      print("resposta:");
      print(res);
      if (res == 201) {
        _isRegistered = true;
        _isRegisteredController.sink.add(_isRegistered);
        _userMessageRegisterController.sink.add("Registrado!");
      } else {
        _isRegistered = false;
        _isRegisteredController.sink.add(_isRegistered);
        if (res == 403) {
          _userMessageRegisterController.sink.add("Usuário já existe!");
        } else {
          _userMessageRegisterController.sink.add("Verifique o Microserviço!");
        }
      }
    } catch (e) {
      _isRegistered = false;
      print(e);
    }
  }

  void dispose() {
    _emailController.close();
    _passwordController.close();
    _isRegisteredController.close();
    _userMessageController.close();
    _userMessageRegisterController.close();
  }
}













// class RegistroBloc with Validators {
//   final _emailController = BehaviorSubject<String>();
//   final _passwordController = BehaviorSubject<String>();

//   final ValueNotifier<bool> _isLoggedController = ValueNotifier<bool>(false);
//   final _isRegisteredController = StreamController<bool>();
//   final StreamController<String> _userMessageController =
//       StreamController<String>.broadcast();
//   final StreamController<String> _userMessageRegisterController =
//       StreamController<String>.broadcast();

//   Stream<String> get email => _emailController.stream.transform(validateEmail);
//   Stream<String> get password =>
//       _passwordController.stream.transform(validatePassword);
//   ValueListenable<bool> get isLogged => _isLoggedController;
//   Stream<bool> get isRegistered => _isRegisteredController.stream;
//   Stream<String> get userMessage => _userMessageController.stream;
//   Stream<String> get userMessageRegister =>
//       _userMessageRegisterController.stream;

//   late String _email;
//   late String _password;
//   late bool _isRegistered = false;

//   final _mssUser = MssUser();

//   Function(String) get changeEmail => (String email) {
//         _emailController.sink.add(email);
//         _email = email;
//       };

//   Function(String) get changePassword => (String password) {
//         _passwordController.sink.add(password);
//         _password = password;
//       };

//   Future<void> login() async {
//     try {
//       int? res = 0;
//       res = await _mssUser.login(_email, _password);
//       print("resposta:");
//       print(res);
//       if (res == 200) {
//         _isLoggedController.value = true;
//         _userMessageController.sink.add("Login!");
//       } else {
//         _isLoggedController.value = false;
//         if (res == 401) {
//           _userMessageController.sink.add("Email ou senha incorretos!");
//         } else {
//           _userMessageController.sink.add("Verifique o Microserviço!");
//         }
//       }
//     } catch (e) {
//       _isLoggedController.value = false;
//       print(e);
//     }
//   }

//   Future<void> logout() async {
//     _isLoggedController.value = false;
//   }

//   Future<void> register(String regName, String regPhone, String regAddress,
//       String regEmail, String regPassword) async {
//     try {
//       int? res = 0;
//       res = await _mssUser.register(
//           regName, regPhone, regAddress, regEmail, regPassword);
//       print("resposta:");
//       print(res);
//       if (res == 201) {
//         _isRegistered = true;
//         _isRegisteredController.sink.add(_isRegistered);
//         _userMessageRegisterController.sink.add("Registrado!");
//       } else {
//         _isRegistered = false;
//         _isRegisteredController.sink.add(_isRegistered);
//         if (res == 403) {
//           _userMessageRegisterController.sink.add("Usuário já existe!");
//         } else {
//           _userMessageRegisterController.sink.add("Verifique o Microserviço!");
//         }
//       }
//     } catch (e) {
//       _isRegistered = false;
//       print(e);
//     }
//   }

//   void dispose() {
//     _emailController.close();
//     _passwordController.close();
//     _isRegisteredController.close();
//     _userMessageController.close();
//     _userMessageRegisterController.close();
//   }
// }
