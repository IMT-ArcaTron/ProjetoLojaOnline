import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const OrdersContext = createContext();

function OrdersProvider({ children }) {
  //   const { setIsLoading } = useContext(LoadingContext);

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    axios.get("http://localhost:3006/orders").then((res) => {
      // console.log("res.data:", res.data);
      setOrders(res.data);
      getTotal(res.data);
    });
  }

  function getTotal(orders) {
    let total = 0;
    orders.forEach((order) => {
      total += order.quantity * order.product[0].price;
    });
    setTotal(total);
  }

  async function addOrder(productCode) {
    axios
      .post("http://localhost:3006/orders", { productCode })
      .then(() => getAll())
      .then(() => {
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 2000);
      })
      .catch((err) => {
        alert(`Erro ao adicionar no carrinho: ${err}`);
      });
  }

  async function removeOrder(productCode) {
    console.log(typeof productCode);
    console.log("productCode no removeOrder (context):", productCode);
    axios
      .delete("http://localhost:3006/orders", { data: { productCode } })
      .then(() => getAll())
      .catch((err) => {
        alert(`Erro ao deleter do carrinho: ${err}`);
      });
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        total,
        addOrder,
        removeOrder,
        showSuccessToast,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };
