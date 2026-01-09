// Nomor 4
import styles from "./AlertBox.module.css";

function AlertBox({ type, message }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
}

export default AlertBox;
