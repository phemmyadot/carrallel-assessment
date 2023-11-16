import { useEffect } from "react";
import styles from "./Toast.module.css";

export interface ToastProps {
  message: string;
  showToast: boolean;
  type: ToastType;
  onClose: () => void;
}

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

const Toast: React.FC<ToastProps> = ({ message, showToast, onClose }) => {
  useEffect(() => {
    if (showToast) {
      const toastTimeout = setTimeout(() => {
        onClose();
      }, 3000); // Adjust the timeout duration as needed
      return () => clearTimeout(toastTimeout);
    }
  }, [showToast, onClose]);

  return (
    showToast && (
      <div className={styles.toast}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default Toast;
