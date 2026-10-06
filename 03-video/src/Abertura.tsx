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
import { PoteDeMel } from "./PoteDeMel";

type AberturaProps = {
  readonly style?: React.CSSProperties;
};

const AberturaInner: React.FC<AberturaProps> = ({ style }) => {
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
        ...style,
      }}
    >
      <PoteDeMel name="Pote de mel" premountFor={fps} style={{ marginBottom: 40 }} />

      <Interactive.Div
        name="Nome"
        style={{
          fontFamily: "Fraunces, serif",
          fontVariationSettings: FRAUNCES_VARIACOES,
          fontWeight: 500,
          fontSize: 136,
          lineHeight: 1,
          color: "#4A2C1A",
          letterSpacing: "-0.01em",
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
        Melissa Bohn
      </Interactive.Div>

      <Interactive.Div
        name="Profissão"
        style={{
          marginTop: 36,
          fontWeight: 700,
          fontSize: 44,
          letterSpacing: "0.24em",
          color: "#9A5F06",
          opacity: interpolate(frame, [2.7 * fps, 3.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [2.7 * fps, 3.5 * fps],
            ["0px 30px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        FONOAUDIÓLOGA
      </Interactive.Div>

      <Interactive.Div
        name="Registro"
        style={{
          marginTop: 14,
          fontWeight: 600,
          fontSize: 34,
          letterSpacing: "0.12em",
          color: "#6B3E26",
          opacity: interpolate(frame, [3.1 * fps, 3.8 * fps], [0, 0.75], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        CRFa 3-13265
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const aberturaSchema = {} as const satisfies InteractivitySchema;

export const Abertura = Interactive.withSchema({
  Component: AberturaInner,
  componentName: "<Abertura>",
  schema: aberturaSchema,
  wrapInSequence: true,
});
