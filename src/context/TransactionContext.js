"use client";
import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase"
import { getAuth } from "firebase/auth";

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  // const addTransaction = (transaction) => {
  //   setTransactions((prev) => [...prev, transaction]);
  // };
    const readTransaction = async () => {
      if (!user) return[];  
      const querySnapshot = await getDocs(collection(db,"users", user.uid, "transaction"));
      const transaction = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(transaction);
    };
  useEffect(()=>{
    readTransaction()
  },[])

  const addTransaction = async (amount,category,date,description,type) => {
    if (!user) return;    
    await addDoc(collection(db,"users", user.uid, "transaction"), {
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
      if (!user) return;
      const snapshot = await getDocs(collection(db, "users", user.uid, "budgets"))
      const limits = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setBudgets(limits)
    }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, fetchBudgets, budgets, readTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
