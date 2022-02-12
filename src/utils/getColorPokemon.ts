/* eslint-disable no-var */
/* eslint-disable prefer-const */
export function getColorPokemon(typeColor: string) {
  let colors = "";
  const allColorsAvaliable: any = {
    normal: "#a4acaf",
    fighting: "#d56723",
    flying: "#7ecdf7",
    poison: "#6f55af",
    ground: "#906727",
    rock: "#a38c21",
    bug: "#729f3f",
    ghost: "#7b62a3",
    steel: "#9eb7b8",
    fire: "#fd7d24",
    water: "#4592c4",
    grass: "#9bcc50",
    electric: "#eed535",
    psychic: "#f355b9",
    ice: "#51c4e7",
    dragon: "#fc801e",
    dark: "#707070",
    fairy: "#fdb9e9",
    unknown: "#666666",
    shadow: "#3b3b3b"
  };

  if (typeColor.length == 0) {
    colors = "#DFEAC1";
  } else {
    colors = allColorsAvaliable?.[typeColor];
  }

  return colors;
}
