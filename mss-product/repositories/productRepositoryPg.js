const IProductRepository = require('../interfaces/productRepositoryInterface');
const Product = require('../entities/product');

class ProductRepositoryPg extends IProductRepository{
    constructor() {
      super();
    }
  
    // Método para criar um novo produto
    create({
        code,
        name,
        price,
        type,
        description,
        urlPhoto
      }) {
        // construtor de User
        const newProduct = new Product({
            code, 
            name, 
            price, 
            type, 
            description, 
            urlPhoto
        });
        
      // adicionar no banco de dados
    }
  
    // Método para obter todos os produtos
    getAll() {
      // buscar do banco de dados
    }
  
    // Método para obter um produto por código
    getByCode(code) {
      // buscar do banco de dados
    }
  
    // Método para atualizar um produto existente
    update({ code, name, price, type, description }) {
        // atualizar no banco de dados
    }
  
    // Método para excluir um produto
    delete(code) {
      // deletar do banco de dados
    }
  }

  module.exports = ProductRepositoryPg;