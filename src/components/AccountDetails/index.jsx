import styles from "./accountdetails.module.css";
import { IconBank } from "../icons";

{
  /* <AccountDetails bankName={account.bank} balance={account.balance}></AccountDetails> */
}
const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export const AccountDetails = ({ bankName, balance }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <IconBank /> {bankName}
      </div>
      <div className={styles.detailing}>
        <p className={styles.title}>Saldo</p>
        <p className={styles.body}>{formater.format(balance)}</p>
      </div>
    </div>
  );
};
