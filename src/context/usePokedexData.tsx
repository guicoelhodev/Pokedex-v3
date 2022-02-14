import { createContext, ReactElement, useState } from "react";

interface Props {
  children: ReactElement;
}
export const PokedexContext = createContext<any>(null);

function PokedexContextData({ children }: Props) {
  const [totalPokemons, setTotalPokemons] = useState<number | null>(null);
  return (
    <PokedexContext.Provider value={{ totalPokemons, setTotalPokemons }}>
      {children}
    </PokedexContext.Provider>
  );
}

export default PokedexContextData;
