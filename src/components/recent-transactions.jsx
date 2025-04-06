import { Home, Car, Utensils, Film, ShoppingCart, Heart, Book, ArrowUp, DollarSign, FileText } from 'lucide-react';
import { format } from "date-fns"
import { useTransactions } from "@/context/TransactionContext";

const iconMap = {
  housing: { icon: Home, color: "text-emerald-500", bg: "bg-emerald-100" },
  transportation: { icon: Car, color: "text-blue-500", bg: "bg-blue-100" },
  food: { icon: Utensils, color: "text-amber-500", bg: "bg-amber-100" },
  entertainment: { icon: Film, color: "text-purple-500", bg: "bg-purple-100" },
  shopping: { icon: ShoppingCart, color: "text-purple-500", bg: "bg-purple-100" },
  healthcare: { icon: Heart, color: "text-teal-500", bg: "bg-teal-100" },
  education: { icon: Book, color: "text-indigo-500", bg: "bg-indigo-100" },
  salary: { icon: ArrowUp, color: "text-emerald-500", bg: "bg-emerald-100" },
  other: { icon: FileText, color: "text-gray-500", bg: "bg-gray-100" },
};

export function RecentTransactions() {
  const {transactions} = useTransactions();

  return (
    <div className="space-y-4 max-h-[330px] overflow-y-auto">
      {transactions.map((transaction) => {
        const { icon: Icon, color, bg } = iconMap[transaction.category] || {};

        return (
          <div key={transaction.id} className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${bg}`}>
              {Icon && <Icon className={`h-4 w-4 ${color}`} />}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{transaction.description}</p>
              <p className="text-xs text-muted-foreground">{format(transaction.date.toDate(), "PPP")}</p>
            </div>
            <div className={`text-sm font-medium ${transaction.type == 'income' ? "text-emerald-500" : "text-rose-500"}`}>
              {Number(transaction.amount).toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
