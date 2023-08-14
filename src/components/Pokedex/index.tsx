import PikachuRun from "../../assets/img/gif/pikachu_run.gif";
import Pagination from "@mui/material/Pagination";
import React, { useRef, useState } from "react";
import useWindowDimensions from "../../hook/useWindowDimensions";
import { useGetPokedex } from "../../service/http/GET/useGetPokedex";
import PokedexItem from "./PokedexItem";

import * as S from "./style";

export function Pokedex() {
  const { width } = useWindowDimensions();
  const [pokemonsPage, setPokemonsPage] = useState<number>(12);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(898 / pokemonsPage);
  const selectRef = useRef<HTMLSelectElement>(null);

  function handleChange(_: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    document.getElementById("pokemonList")?.scrollTo(0, 0);
    document.getElementById("title")?.scrollIntoView();
  }

  const { data: pokedexContent } = useGetPokedex({
    limit: pokemonsPage,
    offSet: pokemonsPage * (page - 1)
  });

  return (
    <S.Container>
      <article>
        <h2 id="title">Poke react</h2>
        <img src={PikachuRun} alt="pikachu running for anywhere, gif image" />
      </article>
      <S.PokemonsPage
        onChange={() => {
          setPokemonsPage(Number(selectRef.current?.value));
        }}>
        <p>Pokemons per page: </p>
        <div className="custom-select">
          <select ref={selectRef}>
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div>
      </S.PokemonsPage>
      <S.PokemonList id="pokemonList">
        {pokedexContent ? (
          pokedexContent.results.map(({ name }) => <PokedexItem key={name} name={name} />)
        ) : (
          <></>
        )}
      </S.PokemonList>
      <footer>
        {width > 600 || width === 600 ? (
          <Pagination count={totalPages} color="primary" page={page} onChange={handleChange} />
        ) : (
          <Pagination
            count={totalPages}
            color="primary"
            size="small"
            page={page}
            onChange={handleChange}
          />
        )}
      </footer>
    </S.Container>
  );
}
