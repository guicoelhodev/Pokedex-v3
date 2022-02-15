/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import * as S from "./style";
import PikachuRun from "../../assets/img/gif/pikachu_run.gif";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useRef, useState } from "react";
import api from "../../service/api";
import PokemonItem from "../PokemonItem";

function PokedexContent() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [pokemonsPage, setPokemonsPage] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<undefined | number>();
  const [page, setPage] = useState(1);
  const [dataApiNames, setDataApiNames] = useState<Array<string> | null>(null);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
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
        .then((res: any) => {
          let tmpGetAllNames: Array<string> = [];
          res.data.results.forEach((obj: any) => tmpGetAllNames.push(obj.name));
          setDataApiNames(tmpGetAllNames);
        });
    }
    getAllNamesPokemons();
  }, [page, selectRef.current?.value]);
  return (
    <S.Container>
      <article>
        <h2>Poke react</h2>
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
      <S.PokemonList>
        {dataApiNames !== null ? (
          dataApiNames.map((name: string) => <PokemonItem key={name} name={name} />)
        ) : (
          <></>
        )}
      </S.PokemonList>
      <footer>
        <Pagination count={totalPages} color="primary" page={page} onChange={handleChange} />
      </footer>
    </S.Container>
  );
}

export default PokedexContent;
