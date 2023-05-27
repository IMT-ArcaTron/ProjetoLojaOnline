class IOrderRepository {
    add(productCode) {
      throw new Error("Method 'add' must be implemented");
    }
  
    remove(productCode) {
      throw new Error("Method 'remove' must be implemented");
    }
  }
  module.exports = IOrderRepository;