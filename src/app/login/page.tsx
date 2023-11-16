"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";
import Link from "next/link";
import Toast, { ToastProps, ToastType } from "../components/Toast";
import Loader from "../components/Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCloseToast = (message: string) => {
    setToast({
      message: message,
      type: ToastType.ERROR,
      showToast: true,
      onClose: () => {
        setToast(null);
      },
    });
  };
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.length < 4 || password.length < 6) return; //TODO: handle error

    try {
      setLoading(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const data = await response.json();
        handleCloseToast(data.message);
      }
    } catch (error: any) {
      handleCloseToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>
          New User? <Link href="/signup">Register</Link>
        </p>
        <button type="submit">Login</button>
      </form>
      {loading && <Loader />}
      {toast && <Toast {...toast} />}
    </>
  );
};

export default Login;
