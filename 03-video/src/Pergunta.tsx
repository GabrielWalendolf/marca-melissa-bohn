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

type PerguntaProps = {
  readonly etiqueta: string;
  readonly pergunta: string;
  readonly fundo: string;
  readonly style?: React.CSSProperties;
};

// Cena de gancho das curiosidades: uma pergunta curta para o público.
const PerguntaInner: React.FC<PerguntaProps> = ({
  etiqueta,
  pergunta,
  fundo,
  style,
}) => {
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
      <Interactive.Svg
        name="Favo com interrogação"
        viewBox="0 0 100 100"
        style={{
          width: 260,
          height: 260,
          marginBottom: 72,
          scale: interpolate(frame, [0, 0.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          rotate: interpolate(
            frame,
            [0, 0.7 * fps, 1.6 * fps, 2 * fps, 2.4 * fps],
            ["-30deg", "0deg", "0deg", "-8deg", "0deg"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.45, 0, 0.55, 1),
            },
          ),
        }}
      >
        <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="#F2A900" />
        <text
          x={50}
          y={69}
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontWeight={600}
          fontSize={56}
          fill="#4A2C1A"
        >
          ?
        </text>
      </Interactive.Svg>

      <Interactive.Div
        name="Etiqueta"
        style={{
          fontWeight: 700,
          fontSize: 40,
          letterSpacing: "0.24em",
          color: "#9A5F06",
          opacity: interpolate(frame, [0.4 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {etiqueta}
      </Interactive.Div>

      <Interactive.Div
        name="Pergunta"
        style={{
          marginTop: 32,
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 500,
          fontSize: 118,
          lineHeight: 1.08,
          color: "#4A2C1A",
          opacity: interpolate(frame, [0.6 * fps, 1.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.6 * fps, 1.4 * fps],
            ["0px 50px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {pergunta}
      </Interactive.Div>

      <Rodape cor="#6B3E26" />
    </AbsoluteFill>
  );
};

const perguntaSchema = {
  etiqueta: { type: "text-content", default: "CURIOSIDADE", description: "Etiqueta" },
  pergunta: { type: "text-content", default: "", description: "Pergunta" },
  fundo: { type: "color", default: "#FFF8EC", description: "Cor de fundo" },
} as const satisfies InteractivitySchema;

export const Pergunta = Interactive.withSchema({
  Component: PerguntaInner,
  componentName: "<Pergunta>",
  schema: perguntaSchema,
  wrapInSequence: true,
});
