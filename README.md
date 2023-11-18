# Projeto Loja Online ArcaTron
---
#### Versão: 2.0
>Este README.md engloba as duas partes do projeto
---

<br/>

# 👨‍💻 Grupo:
### Ahmad Kheder Mahfoud  
##### RA: 20.01323-0
### Caio Bartolozzi Bastos Godoy de Toledo
##### RA: 20.01430-9
### Caio Rabinovich Panes Brunholi
##### RA: 20.01285-3
### Felippe Onishi 
##### RA: 20.00255-6

<br/>
<br/>
<br/>

---

# 🏁 **PARTE 1 DO PROJETO**
# 🚀 Primeiro Release
## `mss-user`
### - Microserviço de cadastro, armazenamento e gerenciamento de usuários


### - Utilizado para realizar login

<br/>
<br/>

# 🚀 Segundo Release
## `mss-user`
### - Microserviço de cadastro, armazenamento e gerenciamento de usuários
### - Utilizado para realizar login
### - Integração com o banco de dados ainda não implementada
> Para mais informações, ler README na pasta do microserviço

<br/>

## `mss-product`
### - Microserviço de cadastro, armazenamento e gerenciamento de produtos
### - Utilizado para adicionar e remover produtos do carrinho do cliente 
> Para mais informações ler README na pasta do microserviço

### - Este microserviço inicia a implementação do Banco de Dados Postgres
> Para mais informações ler o README na pasta DB

<br/>

## `frontEnd`
### - Esqueleto do front end
### - Ainda não implementado com o restante do sistema
> Para mais informações ler README na pasta frontEnd 

<br/>
<br/>

# 🚀 Terceiro Release
## `barramento de eventos`
### - Barramento de eventos realiza a comunicação entre os microserviços 
### - Recebe informações sobre os pedidos adicionados ao carrinho, associando o produto no carrinho com o usuário
> Para mais informações ler o README na pasta `barramento-eventos`

<br/>

## `Integração frontEnd - backEnd`
### - Realizada a integração entre o Front-End e o Back-end
### - Agora é possível realizar os testes das requisições dos microserviços utilizando o console do navegador

<br/>
<br/>

# 🚀 Último Release
## `Integração final frontEnd - backEnd`
### - Realizada a integração final entre o fronteEnd e o backEnd
### - É possível acessar o site, fazer login e/ou criar conta. Após o login o usuário é redirecionado para a loja
### - Agora é possível navegar entre os produtos pré-cadastrados, adicioná-los e removê-los do carrinho. Por fim ver todos os itens do carrinho e encerrar a compra

## `Video do funcionamento`
 > # https://youtu.be/UPx78zR-3AM

<br/>
<br/>
<br/>
<br/>

 ---

# 🏁 **PARTE 2 DO PROJETO**
# 🚀 Primeiro Release
### - Dockerização de `mss-user`
### - Dockerização de `mss-product`
### - Dockerização de `barramento-eventos`
## Instruções de inicialização
### Caso possua GitBash instalado, ou esteja utilizando sistema operacional Linux/MacOS utilize o comando:
```bash
./run_all_containers.sh
```
### Esse script inicializará todos os conatiners automaticamente

</br>

### Caso esteja no Windows, em terminais diferentes utilize os comandos:
``` cmd
cd barramento-eventos
docker-compose up -d
```

``` cmd
cd mss-user
docker build -t mss-user . && docker run -d -p 3005:3005 mss-user
```

``` cmd
cd mss-product
docker-compose up -d
```

</br>
</br>

# 🚀 Segundo Release
### - Kubernetes de `mss-user`
### - Kubernetes de `mss-product`
### - Kubernetes de `barramento-eventos`

## Descrição
### Os arquivos `[MSS]-deployment.yaml` são responsáveis por buscar as imagens `docker` no Docker Hub e iniciar o serviço de `ClusterIp` que expõe a porta do container dentro do cluster
### Os arquivos `[MSS]-service.yaml` são responsáveis por iniciar o serviço de `NodePort` que expõe as portas dos containers internos ao cluster ao ambiente externo (nesse caso a máquina host)

## Instruções de inicialização
### Acesse as pastas `/kubernetes` de cada microserviço e utilize os comandos de implantação
``` cmd
cd barramento-eventos/kubernetes

kubectl apply -f barramento-eventos-deployment.yaml

kubectl apply -f barramento-eventos-service.yaml
```
``` cmd
cd mss-product/kubernetes

kubectl apply -f mss-product-deployment.yaml

kubectl apply -f mss-product-service.yaml
```
``` cmd
cd mss-user/kubernetes

kubectl apply -f mss-user-deployment.yaml

kubectl apply -f mss-user-service.yaml
```

</br>
</br>

# 🚀 Terceiro Release
### - Implementação do novo Front-End em `flutter` com integração com o primeiro microsserviço `mss-user`
> No momento ele está usando o serviço local, mas será implementado utilizando o cluster kubernetes
### Para mais informações acesse a pasta `frontEnd/front_loja_online_flutter`

</br>
</br>

# 🚀 Quarto Release
### - Implementação do novo Front-End em `flutter` com integração com o segundo microsserviço `mss-product`
> No momento ele está usando o serviço local, mas será implementado utilizando o cluster kubernetes
>> Ao rodar localmente é necessário subir os 3 microserviços:
>> - mss-user
>> - mss-product
>> - barramento-eventos
### Para mais informações acesse a pasta `frontEnd/front_loja_online_flutter`