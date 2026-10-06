import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { FRAUNCES_VARIACOES } from "./fontes";
import { Rodape } from "./Rodape";

type DicaProps = {
  readonly etiqueta: string;
  readonly titulo: string;
  readonly texto: string;
  readonly fundo: string;
  readonly style?: React.CSSProperties;
};

// Cena de fechamento das curiosidades: uma dica prática e um convite.
const DicaInner: React.FC<DicaProps> = ({ etiqueta, titulo, texto, fundo, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: fundo,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Nunito, sans-serif",
        padding: "0 100px",
        textAlign: "center",
        ...style,
      }}
    >
      <Interactive.Div
        name="Etiqueta"
        style={{
          fontWeight: 700,
          fontSize: 40,
          letterSpacing: "0.24em",
          color: "#9A5F06",
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {etiqueta}
      </Interactive.Div>

      <Interactive.Div
        name="Título"
        style={{
          marginTop: 32,
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 500,
          fontSize: 104,
          lineHeight: 1.1,
          color: "#4A2C1A",
          opacity: interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.3 * fps, 1.1 * fps],
            ["0px 50px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {titulo}
      </Interactive.Div>

      <Interactive.Div
        name="Linha de mel"
        style={{
          marginTop: 56,
          marginBottom: 56,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#F2A900",
          width: interpolate(frame, [0.9 * fps, 1.6 * fps], [0, 160], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Texto"
        style={{
          maxWidth: 840,
          fontSize: 52,
          lineHeight: 1.4,
          color: "#6B3E26",
          opacity: interpolate(frame, [1.3 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [1.3 * fps, 2.1 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {texto}
      </Interactive.Div>

      <Rodape cor="#6B3E26" />
    </AbsoluteFill>
  );
};

const dicaSchema = {
  etiqueta: { type: "text-content", default: "DICA", description: "Etiqueta" },
  titulo: { type: "text-content", default: "", description: "Título" },
  texto: { type: "text-content", default: "", description: "Texto" },
  fundo: { type: "color", default: "#FFF8EC", description: "Cor de fundo" },
} as const satisfies InteractivitySchema;

export const Dica = Interactive.withSchema({
  Component: DicaInner,
  componentName: "<Dica>",
  schema: dicaSchema,
  wrapInSequence: true,
});
