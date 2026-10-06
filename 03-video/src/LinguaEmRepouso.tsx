import { interpolatePaths } from "@remotion/paths";
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

type LinguaEmRepousoProps = {
  readonly style?: React.CSSProperties;
};

// Esquema da boca de perfil (virada para a direita): a língua sai do
// "chão" da boca e sobe até encostar no céu da boca, atrás dos dentes de cima.
const LinguaEmRepousoInner: React.FC<LinguaEmRepousoProps> = ({ style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFF8EC",
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
        name="Esquema da boca"
        viewBox="0 0 400 300"
        style={{
          width: 880,
          height: 660,
          marginBottom: 40,
          opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {/* Céu da boca */}
        <path
          d="M40 128 C 110 62, 230 58, 292 104"
          fill="none"
          stroke="#6B3E26"
          strokeWidth={7}
          strokeLinecap="round"
        />
        {/* Chão da boca */}
        <path
          d="M40 258 C 140 276, 240 270, 292 246"
          fill="none"
          stroke="#6B3E26"
          strokeWidth={7}
          strokeLinecap="round"
        />

        {/* Língua */}
        <Interactive.Path
          name="Língua"
          d={interpolatePaths(
            frame,
            [0.8 * fps, 2 * fps],
            [
              "M44 252 C 46 206, 130 186, 214 190 C 250 192, 276 200, 284 212 C 290 222, 288 232, 286 238 C 285 242, 286 244, 288 246 C 206 258, 120 258, 44 252 Z",
              "M44 252 C 46 160, 120 96, 206 92 C 250 90, 280 100, 286 114 C 290 130, 280 150, 276 172 C 272 200, 278 228, 288 246 C 206 258, 120 258, 44 252 Z",
            ],
            {
              easing: Easing.bezier(0.65, 0, 0.35, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          )}
          fill="#F2A900"
          stroke="#9A5F06"
          strokeWidth={3}
        />

        {/* Dentes da frente, de cima e de baixo */}
        <path
          d="M290 102 C 306 100, 318 108, 318 124 L 314 170 C 312 180, 298 180, 296 170 L 288 118 Z"
          fill="#FFF8EC"
          stroke="#6B3E26"
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <path
          d="M290 248 L 294 196 C 296 186, 310 186, 312 196 L 314 236 C 314 246, 302 250, 290 248 Z"
          fill="#FFF8EC"
          stroke="#6B3E26"
          strokeWidth={4}
          strokeLinejoin="round"
        />

        {/* Lábios fechados */}
        <path
          d="M316 98 C 346 112, 356 150, 342 182"
          fill="none"
          stroke="#9A5F06"
          strokeWidth={7}
          strokeLinecap="round"
        />
        <path
          d="M342 186 C 356 210, 348 238, 314 252"
          fill="none"
          stroke="#9A5F06"
          strokeWidth={7}
          strokeLinecap="round"
        />

        {/* Onda no ponto de contato, depois que a língua sobe */}
        <circle
          cx={282}
          cy={110}
          r={interpolate(frame, [2.1 * fps, 3 * fps], [6, 34], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}
          fill="none"
          stroke="#9A5F06"
          strokeWidth={3}
          opacity={interpolate(frame, [2.1 * fps, 2.3 * fps, 3 * fps], [0, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
        />
        <circle
          cx={282}
          cy={110}
          r={7}
          fill="#4A2C1A"
          opacity={interpolate(frame, [2 * fps, 2.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
        />

        <text
          x={120}
          y={52}
          fontFamily="Nunito, sans-serif"
          fontWeight={700}
          fontSize={15}
          letterSpacing="2.5"
          fill="#9A5F06"
        >
          CÉU DA BOCA
        </text>
      </Interactive.Svg>

      <Interactive.Div
        name="Resposta"
        style={{
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 500,
          fontSize: 96,
          lineHeight: 1.1,
          color: "#4A2C1A",
          opacity: interpolate(frame, [2.2 * fps, 2.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [2.2 * fps, 3 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        No céu da boca.
      </Interactive.Div>

      <Interactive.Div
        name="Complemento"
        style={{
          marginTop: 32,
          maxWidth: 820,
          fontSize: 50,
          lineHeight: 1.4,
          color: "#6B3E26",
          opacity: interpolate(frame, [2.8 * fps, 3.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        A ponta fica logo atrás dos dentes de cima, sem empurrar.
      </Interactive.Div>

      <Rodape cor="#6B3E26" />
    </AbsoluteFill>
  );
};

const linguaEmRepousoSchema = {} as const satisfies InteractivitySchema;

export const LinguaEmRepouso = Interactive.withSchema({
  Component: LinguaEmRepousoInner,
  componentName: "<LinguaEmRepouso>",
  schema: linguaEmRepousoSchema,
  wrapInSequence: true,
});
