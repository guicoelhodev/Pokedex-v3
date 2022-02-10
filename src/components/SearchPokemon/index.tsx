/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { Autocomplete, Alert, TextField } from "@mui/material";
import { MdCatchingPokemon } from "react-icons/md";
import * as S from "./style";
import api from "../../service/api";
import { useEffect, useState } from "react";

interface PokemonsType {
  name: string;
}
function SearchPokemon() {
  const [pokemonsData, setPokemonsData] = useState<string[]>([]);
  const [errorPokemon, setErrorPokemon] = useState(false);
  const [loadingState, setLoadingState] = useState(true);

  const pokemon = document.getElementById("combo-box-demo") as HTMLInputElement;

  const searchPokemon = () => {
    let pokemonSelected = pokemon?.value;

    if (pokemonSelected.length != 0) return setErrorPokemon(false);
    else return setErrorPokemon(true);
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
    <>
      <S.Container>
        <section>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={pokemonsData}
            sx={{ width: 300, height: 100 }}
            renderInput={(params) => <TextField {...params} label="Search your favorite pokemon" />}
          />
          {loadingState ? (
            <S.LoadingPokemon>
              <MdCatchingPokemon />
              <span>Loading </span>
            </S.LoadingPokemon>
          ) : (
            <S.SearchBtn onClick={searchPokemon}>
              <MdCatchingPokemon />
              <span>Search Pokemon</span>
            </S.SearchBtn>
          )}
        </section>
        <aside>
          {errorPokemon ? (
            <Alert severity="warning">You need to find a pokemon first !</Alert>
          ) : (
            <></>
          )}
        </aside>
      </S.Container>
    </>
  );
}

export default SearchPokemon;
