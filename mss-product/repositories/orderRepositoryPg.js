const IOrderRepository = require('../interfaces/orderRepositoryInterface');
const Order = require('../entities/order');
class OrderRepositoryMock extends IOrderRepository {
    constructor(productRepository) {
      super();
      this.productRepository = productRepository;

    }
  
    add(productCode) {
        // adicionar no banco de dados
    }
  
    remove(productCode) {
        // remover do banco de dados
    }

    getAll() {
        // buscar do banco de dados
    }
  
  }

  module.exports = OrderRepositoryMock;