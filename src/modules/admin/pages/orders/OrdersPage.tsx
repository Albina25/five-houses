import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase';
import { useActions, useAppSelector } from '@/shared/hooks/redux';
import { IOrder } from '@/shared/types/IOrder';
import { orderActions } from '@/store/slices/OrderSlice';

const OrderPage: React.FC = () => {
  const { setAllOrdersInState } = useActions(orderActions);
  const orders = useAppSelector((state) => state.orderReducer.order);
  const [allOrders, setAllOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setAllOrdersInState(allOrders);
  }, [allOrders, setAllOrdersInState]);

  async function getOrders() {
    setAllOrders([]);
    const q = query(collection(db, 'orders'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      const newOrder = {
        id: doc.id,
        ...doc.data(),
      } as IOrder;

      setAllOrders((prevOrders: IOrder[]) => [...prevOrders, newOrder]);
    });
  }

  return (
    <>
      <div>Admin OrderPage</div>
      {orders.map((order) => (
        <div key={order.id}>{order.id}</div>
      ))}
    </>
  );
};

export default OrderPage;
