"use client";
import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase"

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  // const addTransaction = (transaction) => {
  //   setTransactions((prev) => [...prev, transaction]);
  // };

  useEffect(()=>{
    const readTransaction = async () => {
      const querySnapshot = await getDocs(collection(db, "transaction"));
      const transaction = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(transaction);
    };
    readTransaction()
  },[])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
