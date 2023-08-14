import * as S from "./style";
import PikachuRun from "../../assets/img/gif/pikachu_run.gif";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useRef, useState } from "react";
import api from "../../service/api";
import useWindowDimensions from "../../hook/useWindowDimensions";
import PokedexItem from "../PokedexItem";

function PokedexContent() {
  const { width } = useWindowDimensions();
  const selectRef = useRef<HTMLSelectElement>(null);
  const [pokemonsPage, setPokemonsPage] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<undefined | number>();
  const [page, setPage] = useState(1);
  const [dataApiNames, setDataApiNames] = useState<Array<string> | null>(null);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    document.getElementById("pokemonList")?.scrollTo(0, 0);
    document.getElementById("title")?.scrollIntoView();
  }

  useEffect(() => {
    let tmpTotalPages = 898 / pokemonsPage;
    let tmpNumber = Math.ceil(tmpTotalPages);
    setTotalPages(tmpNumber);
  }, [pokemonsPage]);

  useEffect(() => {
    async function getAllNamesPokemons() {
      api
        .get(`pokemon?limit=${pokemonsPage}&offset=${pokemonsPage * (page - 1)}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          let tmpGetAllNames: Array<string> = [];
          res.data.results.forEach((obj: { name: string }) => tmpGetAllNames.push(obj.name));
          setDataApiNames(tmpGetAllNames);
        });
    }
    getAllNamesPokemons();
  }, [page, selectRef.current?.value]);
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
        {dataApiNames !== null ? (
          dataApiNames.map((name: string) => <PokedexItem key={name} name={name} />)
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

export default PokedexContent;
