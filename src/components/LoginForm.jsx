import { useState } from "react";
import { loginUser } from "@/firebase/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      console.log("Logged in:", user);
      toast.success("Logged in successfully!");
      router.push('/');
    } catch (err) {
      console.log("Login error:", err.message);
      toast.error("Invalid email or password.");
    }
  };

  return (
    <form
  onSubmit={handleLogin}
  className="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg p-6 space-y-4"
>
  <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
      Email
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
      Password
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
  >
    Login
  </button>
</form>

  );
}
