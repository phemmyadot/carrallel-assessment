import { useEffect } from "react";
import styles from "../styles/Toast.module.css";

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

const getBackgroundColor = (type: ToastType) => {
  switch (type) {
    case ToastType.SUCCESS:
      return "#4CAF50";
    case ToastType.ERROR:
      return "#F44336";
    case ToastType.WARNING:
      return "#FF9800";
    default:
      return "#4CAF50";
  }
};

const Toast: React.FC<ToastProps> = ({ message, showToast, onClose, type }) => {
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
      <div
        className={styles.toast}
        style={{ backgroundColor: getBackgroundColor(type) }}
      >
        <p>{message}</p>
      </div>
    )
  );
};

export default Toast;
