import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const OrdersContext = createContext();

function OrdersProvider({ children }) {
  //   const { setIsLoading } = useContext(LoadingContext);

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);

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
    startProgress();
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
    setToastProgress(0);
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

  const startProgress = () => {
    const interval = 2; // Atualizar a cada 20ms
    const totalTime = 2000; // 2 segundos
    const steps = totalTime / interval;
    const increment = 1000 / steps;

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += increment;
      setToastProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, interval);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        total,
        addOrder,
        removeOrder,
        showSuccessToast,
        toastProgress,
        setToastProgress,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };
