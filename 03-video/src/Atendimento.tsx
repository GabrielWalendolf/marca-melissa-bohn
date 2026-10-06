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

type Icone = "fala" | "coracao" | "casa";

type AtendimentoProps = {
  readonly numero: string;
  readonly titulo: string;
  readonly texto: string;
  readonly icone: Icone;
  readonly fundo: string;
  readonly style?: React.CSSProperties;
};

// Traços em grade de 24 unidades, desenhados com pathLength={1}.
const TRACOS: Record<Icone, string[]> = {
  fala: [
    "M4.5 5h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.5V17h-2A1.5 1.5 0 0 1 3 15.5v-9A1.5 1.5 0 0 1 4.5 5z",
    "M8 11h.01M12 11h.01M16 11h.01",
  ],
  coracao: [
    "M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z",
  ],
  casa: ["M3 11.5 12 4l9 7.5", "M5.5 9.5V20h13V9.5", "M10 20v-5.5h4V20"],
};

const AtendimentoInner: React.FC<AtendimentoProps> = ({
  numero,
  titulo,
  texto,
  icone,
  fundo,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const desenho = interpolate(frame, [0.35 * fps, 1.2 * fps], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });

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
        name="Favo com ícone"
        viewBox="0 0 100 100"
        style={{
          width: 340,
          height: 340,
          marginBottom: 70,
          scale: interpolate(frame, [0, 0.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          rotate: interpolate(frame, [0, 0.7 * fps], ["-30deg", "0deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
          }),
        }}
      >
        <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="#F2A900" />
        <g transform="translate(24 24) scale(2.1667)">
          {TRACOS[icone].map((d) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              fill="none"
              stroke="#4A2C1A"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 1"
              strokeDashoffset={desenho}
            />
          ))}
        </g>
      </Interactive.Svg>

      <Interactive.Div
        name="Número"
        style={{
          fontWeight: 700,
          fontSize: 40,
          letterSpacing: "0.24em",
          color: "#9A5F06",
          opacity: interpolate(frame, [0.5 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {numero}
      </Interactive.Div>

      <Interactive.Div
        name="Título"
        style={{
          marginTop: 24,
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 500,
          fontSize: 112,
          lineHeight: 1.05,
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
        {titulo}
      </Interactive.Div>

      <Interactive.Div
        name="Texto"
        style={{
          marginTop: 44,
          maxWidth: 820,
          fontWeight: 400,
          fontSize: 50,
          lineHeight: 1.4,
          color: "#6B3E26",
          opacity: interpolate(frame, [1 * fps, 1.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [1 * fps, 1.8 * fps],
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

const atendimentoSchema = {
  numero: { type: "text-content", default: "ATENDIMENTO 01", description: "Número" },
  titulo: { type: "text-content", default: "Linguagem infantil", description: "Título" },
  texto: { type: "text-content", default: "", description: "Texto" },
  fundo: { type: "color", default: "#FFF8EC", description: "Cor de fundo" },
} as const satisfies InteractivitySchema;

export const Atendimento = Interactive.withSchema({
  Component: AtendimentoInner,
  componentName: "<Atendimento>",
  schema: atendimentoSchema,
  wrapInSequence: true,
});
