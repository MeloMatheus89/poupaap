import { Container } from "./components/Container/";
import { Aside } from "./components/Container/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";
function App() {
  return (
    <Container>
      <Aside></Aside>
      <Main>
        <SearchInput></SearchInput>
        <div>
          <Typography variant="h1">Olá, Matheus!</Typography>
          <Typography variant="body">Veja como estão suas finanças hoje.</Typography>
        </div>
        <section>
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
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 200,00</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 200,00</Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
