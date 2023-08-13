import styled from "styled-components";
import { GlobalStyle } from "../style/globalStyle";
import { Home } from "../components/Home";
import { Pokedex } from "../components/Pokedex";
import { SinglePokemon } from "../components/SinglePokemon";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const EmptyDiv = styled.div`
  width: 100%;
  height: 300px;
`;
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
      {/* <EmptyDiv /> */}
      <SinglePokemon />

      <Pokedex />
      {/* <Pokedex /> */}
    </QueryClientProvider>
  );
}
