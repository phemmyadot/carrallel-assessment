"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Toast, { ToastProps, ToastType } from "../components/Toast";
import Loader from "../components/Loader";
import styles from "../styles/Auth.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [loading, setLoading] = useState(false);

  const handleShowToast = (message: string) => {
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
        handleShowToast(data.message);
      }
    } catch (error: any) {
      handleShowToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>Login</h1>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className={styles.authSwitch}>
          New User? <Link href="/signup">Register</Link>
        </p>
        <button type="submit">Login</button>
      </form>
      {loading && <Loader />}
      {toast && <Toast {...toast} />}
    </div>
  );
};

export default Login;
