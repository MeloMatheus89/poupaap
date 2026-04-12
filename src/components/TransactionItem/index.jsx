import styles from "./transactionitem.module.css";

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const TransactionItem = ({ item }) => {
  const descriptionAditionalClassName = item.value >= 0 ? styles.income : styles.expense;
  return (
    <div className={styles.transaction}>
      {/* Ao usar o array para adicionar as classes, o Css não puxa os estilos. Porém, ao usar o "join" ele transforma em string e adiciona o que estiver entre parênteses para terminar de formatar o estilo */}
      <div className={[styles.description, descriptionAditionalClassName].join(" ")}>
        <p>{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className={styles.date}>{new Date(item.date).toLocaleDateString("pt-BR")}</div>
    </div>
  );
};
