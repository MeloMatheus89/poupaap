import { Container } from "./components/Container/";
import { Aside } from "./components/Container/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
function App() {
  return (
    <Container>
      <Aside></Aside>
      <Main>
        <SearchInput></SearchInput>
      </Main>
    </Container>
  );
}

export default App;
