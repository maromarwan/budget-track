import { db } from "@/firebase/firebase"; // ✅ use import, not require
import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

  export const addBudget = async (category, limit, user) => {
    try {
      await addDoc(collection(db,"users", user.uid, "budgets"), {
        category,
        limit: parseFloat(limit),
      });
    } catch (error) {
      console.error("Error adding budget:", error);
    }
  };
  
  // Delete budget by ID
  export const deleteBudget = async (id, user) => {
    const ref = doc(db,"users", user.uid, "budgets", id)
    await deleteDoc(ref)
  }
