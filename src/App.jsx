// O import de estilos sempre vem no topo para sanar o meu bug mental.
import styles from "./app.module.css";

import { Container } from "./components/Container/";
import { Aside } from "./components/Container/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";
import { Transaction } from "./components/Transactions";
function App() {
  return (
    <Container>
      <Aside></Aside>
      <Main>
        <div className={styles.container}>
          <SearchInput></SearchInput>
          <div>
            <Typography variant="h1">Olá, Matheus!</Typography>
            <Typography variant="body">Veja como estão suas finanças hoje.</Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>
                <DailyBudget value={250} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transaction />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>R$ 200,00</Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
