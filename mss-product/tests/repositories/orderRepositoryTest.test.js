const OrderRepositoryMock = require("../../repositories/orderRepositoryMock"); // Altere o caminho conforme necessário
const ProductRepositoryMock = require("../../repositories/productRepositoryMock");

const productRepository = new ProductRepositoryMock();
const orderRepository = new OrderRepositoryMock(productRepository);

test("OrderRepositoryMock should add an order to the repository", () => {
  const productCode = "1";
  orderRepository.add(productCode);
  const orders = orderRepository.getAll();
  expect(orders).toHaveLength(1);
});

test("OrderRepositoryMock should remove an order from the repository", () => {
  const productCode = "1";
  orderRepository.remove(productCode);
  const orders = orderRepository.getAll();
  expect(orders).toHaveLength(0);
});

test("OrderRepositoryMock should get an order by product code", () => {
  const productCode = "1";
  orderRepository.add(productCode);
  const foundOrders = orderRepository.getByCode(productCode);
  expect(foundOrders).toHaveLength(1);
});

test("OrderRepositoryMock should not find an order for a non-existing product code", () => {
  const productCode = "99999"; // Assuming this code doesn't exist in the repository
  const foundOrders = orderRepository.getByCode(productCode);
  expect(foundOrders).toHaveLength(0);
});

test("OrderRepositoryMock should return all orders in the repository", () => {
  const productCode1 = "1";
  const productCode2 = "2";
  orderRepository.add(productCode1);
  orderRepository.add(productCode2);
  const orders = orderRepository.getAll();
  expect(orders).toHaveLength(2);
});
