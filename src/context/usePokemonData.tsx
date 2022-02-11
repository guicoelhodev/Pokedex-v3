/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import axios from "axios";
import { createContext, useState, useEffect, ReactElement } from "react";
import api from "../service/api";

export const PokemonContext = createContext<any>(null);

interface Props {
  children: ReactElement;
}
interface DataType {
  name: string;
  id: number;
  image: string;
  effect: string;
  short_effect: string;
  height: string;
  width: string;
  types: Array<string>;
  status: Array<string>;
  abilities: Array<string>;
}

export function PokemonData({ children }: Props) {
  const [name, setName] = useState(null);
  const [id, setId] = useState(0);

  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: 0,
    image: "",
    height: 0,
    weight: 0,
    effect: []
  });

  async function getPokemon() {
    await api.get(`pokemon/${name}`).then((res) => setId(res.data.id));
  }

  useEffect(() => {
    console.log(name);
    if (name !== null) {
      getPokemon();
    }
  }, [name]);

  async function getAllData(idPokemon: number) {
    let allDataPokemon = null;
    let allDataEffects: any = [];
    await api.get(`pokemon/${idPokemon}`).then((res) => {
      allDataPokemon = res.data;

      let abilities = res.data.abilities;

      abilities.forEach((item: any) => {
        getAllEffects(item.ability.url, allDataEffects);
      });

      let imagePokemon = checkImageIsAvaliable(allDataPokemon);

      setPokemonData({
        name: allDataPokemon.name,
        id: allDataPokemon.id,
        image: imagePokemon,
        height: allDataPokemon.height,
        weight: allDataPokemon.weight,
        effect: allDataEffects
      });
    });
  }

  function checkImageIsAvaliable(data: any) {
    if (data.sprites.other.dream_world.front_default != null) {
      return data.sprites.other.dream_world.front_default;
    } else {
      return data.sprites.front_default;
    }
  }

  async function getAllEffects(endPoint: any, effectArray: any) {
    await axios.get(endPoint).then((res) => {
      let data = res.data;
      let effectInfo = {};

      data.effect_entries.forEach((item: any) => {
        if (item.language.name === "en") {
          effectInfo = {
            name: data.name,
            effect: item.effect,
            shortEffect: item.short_effect
          };
        }
      });
      effectArray.push(effectInfo);
    });
  }

  useEffect(() => {
    if (id != 0) {
      getAllData(id);
    }
  }, [id]);

  return (
    <PokemonContext.Provider value={{ pokemonData, setName, name }}>
      {children}
    </PokemonContext.Provider>
  );
}
