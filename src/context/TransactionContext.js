"use client";
import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase"

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  // const addTransaction = (transaction) => {
  //   setTransactions((prev) => [...prev, transaction]);
  // };
    const readTransaction = async () => {
      const querySnapshot = await getDocs(collection(db, "transaction"));
      const transaction = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(transaction);
    };
  useEffect(()=>{
    readTransaction()
  },[])

  const addTransaction = async (amount,category,date,description,type) => {
    await addDoc(collection(db, "transaction"), {
      amount: amount,
      category: category,
      date: date,
      description: description,
      type: type
    });
    readTransaction()
  };

    // ✅ Define reusable fetch function
    const fetchBudgets = async () => {
      const snapshot = await getDocs(collection(db, "budgets"))
      const limits = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setBudgets(limits)
    }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, fetchBudgets, budgets }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
