import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { FRAUNCES_VARIACOES } from "./fontes";

type EncerramentoProps = {
  readonly style?: React.CSSProperties;
};

const EncerramentoInner: React.FC<EncerramentoProps> = ({ style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#4A2C1A",
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
        name="Frase"
        style={{
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 400,
          fontSize: 120,
          lineHeight: 1.1,
          color: "#FFF8EC",
          opacity: interpolate(frame, [0.2 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.2 * fps, 1.2 * fps],
            ["0px 50px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Brincar também é linguagem.
      </Interactive.Div>

      <Interactive.Div
        name="Convite"
        style={{
          marginTop: 56,
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 72,
          color: "#F2A900",
          opacity: interpolate(frame, [1.4 * fps, 2.1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Vamos conversar?
      </Interactive.Div>

      <Interactive.Div
        name="Assinatura"
        style={{
          position: "absolute",
          bottom: 220,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          opacity: interpolate(frame, [2.2 * fps, 3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [2.2 * fps, 3.2 * fps], [0.85, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          name="Símbolo"
          src={staticFile("simbolo-negativo.svg")}
          style={{ width: 200, height: 200 }}
        />
        <div
          style={{
            fontFamily: "Fraunces, serif",
            fontVariationSettings: FRAUNCES_VARIACOES,
            fontWeight: 500,
            fontSize: 72,
            color: "#FFF8EC",
          }}
        >
          Melissa Bohn
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: "0.22em",
            color: "#FBE7B5",
          }}
        >
          FONOAUDIÓLOGA · CRFa 3-13265
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const encerramentoSchema = {} as const satisfies InteractivitySchema;

export const Encerramento = Interactive.withSchema({
  Component: EncerramentoInner,
  componentName: "<Encerramento>",
  schema: encerramentoSchema,
  wrapInSequence: true,
});
