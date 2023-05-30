const IOrderRepository = require("../interfaces/orderRepositoryInterface");
const Order = require("../entities/order");
class OrderRepositoryMock extends IOrderRepository {
  constructor(productRepositoryMock) {
    super();
    this.productRepository = productRepositoryMock;
    this.orders = [];
  }

  add(productCode) {
    const foundIndex = this.orders.findIndex(
      (order) => order.product[0].code === productCode
    );
    if (foundIndex === -1) {
      let product = this.productRepository.getByCode(productCode);
      this.orders.push(new Order(product, 1));
    } else {
      this.orders[foundIndex].quantity++;
    }
  }

  remove(productCode) {
    const foundIndex = this.orders.findIndex(
      (order) => order.product[0].code === productCode
    );

    if (foundIndex !== -1) {
      if (this.orders[foundIndex].quantity > 1) {
        this.orders[foundIndex].quantity--;
      } else {
        this.orders.splice(foundIndex, 1);
      }
    }
  }

  getAll() {
    // let myOrders =[]
    // this.productRepository.getAll().forEach((product) => {
    //     let codes = this.orders.map((order) => order.productCode)
    //     if (codes.includes(product.code)) {
    //         myOrders.push(product);
    //     }
    // });
    return this.orders;
  }
}

module.exports = OrderRepositoryMock;
