"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Toast, { ToastProps, ToastType } from "../components/Toast";
import Link from "next/link";
import Loader from "../components/Loader";
import styles from "../styles/Auth.module.css";

interface SignUpForm {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

const SingUpPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState<SignUpForm>({
    username: "",
    password: "",
    confirmPassword: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //TODO: handle error and global loading
    e.preventDefault();
    //validate form
    if (
      username.length < 4 ||
      password.length < 6 ||
      confirmPassword !== password
    ) {
      handleCloseToast("Please check your form");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        router.push("/login");
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
  //validate form
  useEffect(() => {
    if (username.length > 0 && username.length < 4) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Username must be at least 4 characters",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, username: "" }));
    }
    if (password.length > 0 && password.length < 6) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, password: "" }));
    }
    if (confirmPassword.length > 0 && confirmPassword !== password) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Password does not match",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [username, password, confirmPassword]);

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {formErrors.username && <span>{formErrors?.username}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && <span>{formErrors?.password}</span>}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formErrors.confirmPassword && (
          <span>{formErrors?.confirmPassword}</span>
        )}
        <p className={styles.authSwitch}>
          Already have an account? <Link href="/login">Login</Link>
        </p>
        <button type="submit">Sign Up</button>
      </form>
      {loading && <Loader />}
      {toast && <Toast {...toast} />}
    </div>
  );
};

export default SingUpPage;
