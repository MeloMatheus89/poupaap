import { Container } from "./components/Container/";
import { Aside } from "./components/Container/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { Card } from "./components/Card";
function App() {
  return (
    <Container>
      <Aside></Aside>
      <Main>
        <SearchInput></SearchInput>
        <div>
          <Typography variant="h1">Olá, Matheus!</Typography>
          <Typography variant="body">Veja como estão susas finanças hoje.</Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 200,00</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 200,00</Card.Body>
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
