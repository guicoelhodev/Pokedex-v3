import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useGetAllPokemons } from "../../../service/http/GET/useGetAllPokemons";
import * as S from "./style";

interface Props {
  color: string;
  pokemonName: string;
  setPokemonName: Dispatch<SetStateAction<string>>;
}

export function SearchPokemon({ color, pokemonName, setPokemonName }: Props) {
  const { data: allPokemonsList } = useGetAllPokemons();

  const getNextPokemon = (type: "prev" | "next", currentPokemonName: string) => {
    if (!allPokemonsList) return "";
    const pokemonIndex = allPokemonsList.findIndex((i) => i.name === currentPokemonName);

    const tmpNextPokemonIndex = type === "next" ? pokemonIndex + 1 : pokemonIndex - 1;

    return allPokemonsList[tmpNextPokemonIndex].name;
  };

  return (
    <S.Container>
      {!allPokemonsList ? (
        <p>Carregando pokemons</p>
      ) : (
        <>
          <article>
            <S.AutoCompleteStyle
              disablePortal
              id="combo-box-demo"
              options={allPokemonsList.map((i) => i.name)}
              sx={{ width: 300 }}
              onChange={(_, value) => {
                if (!value) return;
                setPokemonName(value as string);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Search your favorite pokemon" />
              )}
              value={pokemonName}
            />
          </article>
          <aside>
            {pokemonName !== allPokemonsList[0].name && (
              <S.NextPokemon
                color={color}
                onClick={() => {
                  const currentPokemonIndex = allPokemonsList.findIndex(
                    (i) => i.name === pokemonName
                  );

                  setPokemonName(allPokemonsList[currentPokemonIndex - 1].name);
                }}>
                <BsArrowLeftCircleFill />
                <p>{getNextPokemon("prev", pokemonName)}</p>
              </S.NextPokemon>
            )}

            {pokemonName !== allPokemonsList.at(-1)?.name && (
              <S.NextPokemon
                color={color}
                onClick={() => {
                  const currentPokemonIndex = allPokemonsList.findIndex(
                    (i) => i.name === pokemonName
                  );

                  setPokemonName(allPokemonsList[currentPokemonIndex + 1].name);
                }}>
                <p>{getNextPokemon("next", pokemonName)}</p>
                <BsArrowRightCircleFill />
              </S.NextPokemon>
            )}
          </aside>
        </>
      )}
    </S.Container>
  );
}
