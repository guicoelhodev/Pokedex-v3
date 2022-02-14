/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { TextField } from "@mui/material";
import { MdCatchingPokemon } from "react-icons/md";
import * as S from "./style";
import api from "../../service/api";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/usePokemonData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
interface PokemonsType {
  name: string;
}
interface Props {
  color: string;
}
function SearchPokemon({ color }: Props) {
  const [pokemonsData, setPokemonsData] = useState<string[]>([]);
  const [errorPokemon, setErrorPokemon] = useState(false);
  const { setName, info } = useContext(PokemonContext);
  const [prevPokemon, setPrevPokemon] = useState("");
  const [nextPokemon, setNextPokemon] = useState("");
  const pokemon = document.getElementById("combo-box-demo") as HTMLInputElement;
  let id = info.id;

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

  useEffect(() => {
    async function getNextPokemon() {
      api.get(`pokemon/${id + 1}`).then((res) => setNextPokemon(res.data.name));
    }
    async function getPrevPokemon() {
      if (id > 1) {
        api.get(`pokemon/${id - 1}`).then((res) => setPrevPokemon(res.data.name));
      }
    }
    if (info.id !== null) {
      getPrevPokemon();
      getNextPokemon();
    }
  }, [id]);

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
      <aside>
        {pokemon?.value.length != 0 ? (
          <>
            <S.NextPokemon color={color} onClick={() => setName(prevPokemon)}>
              <BsArrowLeftCircleFill />
              <p>{prevPokemon}</p>
            </S.NextPokemon>
            <S.NextPokemon color={color} onClick={() => setName(nextPokemon)}>
              <p>{nextPokemon}</p>
              <BsArrowRightCircleFill />
            </S.NextPokemon>
          </>
        ) : (
          <></>
        )}
      </aside>
      {errorPokemon ? (
        <S.AlertStyle severity="warning">You need to find a pokemon first !</S.AlertStyle>
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default SearchPokemon;
