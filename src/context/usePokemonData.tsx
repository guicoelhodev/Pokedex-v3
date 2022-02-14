/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { createContext, useState, useEffect, ReactElement } from "react";
import api from "../service/api";

interface ContextType {
  setName: React.Dispatch<React.SetStateAction<string>>;
  info: InfoProps | null;
  name: string;
}
export const PokemonContext = createContext<ContextType | any>(null);
interface Props {
  children: ReactElement;
}
interface InfoProps {
  name: string;
  id: string | null;
}
export function PokemonData({ children }: Props) {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<InfoProps>({ name: "", id: null });

  useEffect(() => {
    async function getDataP() {
      api.get(`/pokemon/${name}`).then((res) => {
        setInfo({ name: res.data.name, id: res.data.id });
      });
    }
    if (name.length != 0) {
      getDataP();
    }
  }, [name]);

  return (
    <PokemonContext.Provider value={{ setName, info, name }}>{children}</PokemonContext.Provider>
  );
}
