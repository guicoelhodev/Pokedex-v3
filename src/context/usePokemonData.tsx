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
  height: number;
  weight: number;
  stats: Array<{ name: string; stats: string }>;
  types: Array<string>;
  effect: Array<{ name: string; effect: string; short_effect: string }>;
}

export function PokemonData({ children }: Props) {
  const [name, setName] = useState(null);
  const [id, setId] = useState(0);

  const [pokemonData, setPokemonData] = useState<DataType>({
    name: "",
    id: 0,
    image: "",
    height: 0,
    weight: 0,
    stats: [],
    types: [],
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
      let statsArray: Array<{ name: string; stats: string }> = [];
      let typeArray: Array<string> = [];

      getStats(allDataPokemon, statsArray);
      getTypes(allDataPokemon, typeArray);
      console.log(statsArray);
      setPokemonData({
        name: allDataPokemon.name,
        id: allDataPokemon.id,
        image: imagePokemon,
        height: allDataPokemon.height,
        weight: allDataPokemon.weight,
        stats: statsArray,
        types: typeArray,
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

  function getStats(data: any, stats: Array<{ name: string; stats: string }>) {
    data.stats.forEach((obj: any) => {
      if (
        obj.stat.name === "hp" ||
        obj.stat.name === "attack" ||
        obj.stat.name === "defense" ||
        obj.stat.name === "speed"
      )
        return stats.push({
          name: obj.stat.name,
          stats: obj.base_stat
        });
    });
  }
  function getTypes(data: any, array: Array<string>) {
    data.types.forEach((obj: { slot: number; type: { name: string; url: string } }) =>
      array.push(obj.type.name)
    );
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
