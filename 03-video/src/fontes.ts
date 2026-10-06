import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fontes da marca (02-kit/fontes): Fraunces nos títulos, Nunito no apoio.
export const fontesCarregadas = Promise.all([
  loadFont({
    family: "Fraunces",
    url: staticFile("fontes/Fraunces-Variable.ttf"),
    weight: "100 900",
  }),
  loadFont({
    family: "Nunito",
    url: staticFile("fontes/Nunito-Regular.ttf"),
    weight: "400",
  }),
  loadFont({
    family: "Nunito",
    url: staticFile("fontes/Nunito-SemiBold.ttf"),
    weight: "600",
  }),
  loadFont({
    family: "Nunito",
    url: staticFile("fontes/Nunito-Bold.ttf"),
    weight: "700",
  }),
]);

// Fraunces sempre com SOFT 100 e WONK 0, como no guia da marca.
export const FRAUNCES_VARIACOES = "'SOFT' 100, 'WONK' 0, 'opsz' 144";
