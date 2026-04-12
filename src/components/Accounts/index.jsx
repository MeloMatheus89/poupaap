import styles from "./accounts.module.css";

import { AccountDetails } from "../AccountDetails";
import { IconWallet } from "../icons";
import { Button } from "../Button";

export const Accounts = () => {
  // Dados para serem mostrados à fins didáticos. Dados não dinâmicos
  const accounts = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];
  return (
    <>
      <ul className={styles.list}>
        {accounts.map((account, index) => {
          return (
            <li key={index}>
              <AccountDetails bankName={account.bank} balance={account.balance}></AccountDetails>
            </li>
          );
        })}
      </ul>
      <div className={styles.action}>
        <Button>
          <IconWallet /> Adicionar Conta
        </Button>
      </div>
    </>
  );
};
