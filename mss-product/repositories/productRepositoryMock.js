const IProductRepository = require('../interfaces/productRepositoryInterface');
const Product = require('../entities/product');

class ProductRepositoryMock extends IProductRepository{
    constructor() {
      super();
      // Inicialize qualquer estado necessário para o repositório de produtos
      this.products = [];
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
        // construtor de Product
        const newProduct = new Product({
            code, 
            name, 
            price, 
            type, 
            description, 
            urlPhoto
        });
        
      this.products.push(newProduct);
    }
  
    // Método para obter todos os produtos
    getAll() {
      return this.products;
    }
  
    // Método para obter um produto por código
    getByCode(code) {
      return this.products.find(
            (product) => product.code.toString() === code.toString()
        );
    }
  
    // Método para atualizar um produto existente
    update({ code, name, price, type, description, urlPhoto }) {
        const index = this.products.findIndex((p) => p.code === code);

        if (name !== undefined) {
        this.products[index].name = name;
        }

        if (price !== undefined) {
        this.products[index].price = price;
        }

        if (type !== undefined) {
        this.products[index].type = type;
        }

        if (description !== undefined) {
        this.products[index].description = description;
        }

        if (urlPhoto !== undefined) {
        this.products[index].urlPhoto = urlPhoto;
        }

    }
  
    // Método para excluir um produto
    delete(code) {
      this.products = this.products.filter((product) => product.code !== code);
    }
  }

  module.exports = ProductRepositoryMock;