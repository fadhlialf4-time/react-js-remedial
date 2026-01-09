// Nomor 3
import styles from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={`${styles.button} ${styles.default}`}>
        Default
      </button>

      <button className={`${styles.button} ${styles.primary}`}>
        Primary
      </button>
    </div>
  );
}

export default Button;
