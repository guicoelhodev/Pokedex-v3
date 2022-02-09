import { Autocomplete, TextField } from "@mui/material";
import { MdCatchingPokemon } from "react-icons/md";
import * as S from "./style";
import api from "../../service/api";
import { useEffect, useState } from "react";

function SearchPokemon() {
  const [pokemonsData, setPokemonsData] = useState([{}]);
  const pokemon = document.getElementById("combo-box-demo") as HTMLInputElement;

  const searchPokemon = () => {
    console.log(pokemon?.value);
    console.log(pokemonsData);
  };

  useEffect(() => {
    api.get("/generation/1/").then((res) => setPokemonsData(res.data.pokemon_species));
  }, []);

  return (
    <S.Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={pokemonsData}
        sx={{ width: 300, height: 200 }}
        renderInput={(params) => <TextField {...params} label="Saladinha" />}
      />
      <S.SearchBtn onClick={searchPokemon}>
        <MdCatchingPokemon />
        <span>Search Pokemon</span>
      </S.SearchBtn>
    </S.Container>
  );
}

export default SearchPokemon;
