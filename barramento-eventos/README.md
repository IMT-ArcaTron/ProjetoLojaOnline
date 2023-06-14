# `barramento-eventos`
### Barramento de eventos realiza a comunicação entre os microserviços

<br/>

# 🏁 Início Rápido
### Clonar este repositório:
``` bash
git clone [this repository]
```
### Acessar diretório:
``` bash
cd barramento-eventos
```
### Instalar módulos NodeJS:
``` bash
npm install
```

### Iniciar microserviço:
``` bash
npm start
```

<br/>
<br/>

# 💻 Como Usar
### O barramento de eventos sobe na porta `3100`
<br/>



# 📱 Como funciona

## Barramento de eventos
### Toda vez que é realizado algum tipo de request em um microserviço, é informado ao barramento de eventos, que comunica aos outros microserviços em `locahost:3100/events`.  <br/> Se a informação for importante, será realizada algum tipo de ação.

### O barramento de eventos recebe as informações sobre os pedidos que forem adicionados ao carrinho, que é associado ao usuário que solicitou.

> Caso tudo tenha corrido de forma correta, sera exibido uma mensagem "ok".
