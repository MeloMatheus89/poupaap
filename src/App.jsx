import { Container } from "./components/Container/";
import { Aside } from "./components/Container/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
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
        <div></div>
      </Main>
    </Container>
  );
}

export default App;
