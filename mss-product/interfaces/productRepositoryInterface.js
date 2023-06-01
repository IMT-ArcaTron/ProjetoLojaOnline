class IProductRepository {
    create(product) {
      throw new Error("Method 'create' must be implemented");
    }
  
    getAll() {
      throw new Error("Method 'getAll' must be implemented");
    }
  
    getByCode(code) {
      throw new Error("Method 'getByCode' must be implemented");
    }
  
    update(product) {
      throw new Error("Method 'update' must be implemented");
    }
  
    delete(code) {
      throw new Error("Method 'delete' must be implemented");
    }
  }
  module.exports = IProductRepository;