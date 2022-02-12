/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { Autocomplete, Alert, TextField } from "@mui/material";
import { MdCatchingPokemon } from "react-icons/md";
import * as S from "./style";
import api from "../../service/api";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/usePokemonData";

interface PokemonsType {
  name: string;
}
function SearchPokemon() {
  const [pokemonsData, setPokemonsData] = useState<string[]>([]);
  const [errorPokemon, setErrorPokemon] = useState(false);
  const { setName, pokemonData } = useContext(PokemonContext);

  const pokemon = document.getElementById("combo-box-demo") as HTMLInputElement;

  const searchPokemon = () => {
    let pokemonSelected = pokemon?.value;
    if (pokemonSelected.length != 0) {
      setName(pokemonSelected);
      setErrorPokemon(false);
    } else return setErrorPokemon(true);
  };

  useEffect(() => {
    var allPokemons: Array<string> = [];

    for (let i = 1; i < 9; i++) {
      api
        .get(`/generation/${i}/`)
        .then((res) => {
          let data = res.data.pokemon_species;

          data.forEach((element: PokemonsType) => {
            allPokemons = [...allPokemons, element.name];
          });
        })
        .then(() => setPokemonsData(allPokemons));
    }
  }, []);

  return (
    <S.Container>
      <article>
        <S.AutoCompleteStyle
          disablePortal
          id="combo-box-demo"
          options={pokemonsData}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search your favorite pokemon" />}
        />

        <S.SearchBtn onClick={searchPokemon}>
          <MdCatchingPokemon />
          <span>Search Pokemon</span>
        </S.SearchBtn>
      </article>

      {errorPokemon ? <Alert severity="warning">You need to find a pokemon first !</Alert> : <></>}
    </S.Container>
  );
}

export default SearchPokemon;
