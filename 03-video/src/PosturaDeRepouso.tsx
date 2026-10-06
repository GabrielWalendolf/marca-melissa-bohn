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

type ItemProps = {
  readonly numero: string;
  readonly children: string;
  readonly style?: React.CSSProperties;
};

const ItemInner: React.FC<ItemProps> = ({ numero, children, style }) => {
  return (
    <Interactive.Div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 40,
        width: 860,
        fontFamily: "Fraunces, serif",
        fontVariationSettings: FRAUNCES_VARIACOES,
        fontWeight: 500,
        fontSize: 76,
        color: "#4A2C1A",
        textAlign: "left",
        ...style,
      }}
    >
      <svg viewBox="0 0 100 100" style={{ width: 130, height: 130, flexShrink: 0 }}>
        <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="#F2A900" />
        <text
          x={50}
          y={64}
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontWeight={700}
          fontSize={40}
          fill="#4A2C1A"
        >
          {numero}
        </text>
      </svg>
      {children}
    </Interactive.Div>
  );
};

const itemSchema = {
  numero: { type: "text-content", default: "1", description: "Número" },
  children: { type: "text-content", default: "", description: "Texto" },
} as const satisfies InteractivitySchema;

const Item = Interactive.withSchema({
  Component: ItemInner,
  componentName: "<Item>",
  schema: itemSchema,
  wrapInSequence: true,
});

type PosturaDeRepousoProps = {
  readonly style?: React.CSSProperties;
};

const PosturaDeRepousoInner: React.FC<PosturaDeRepousoProps> = ({ style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FBE7B5",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 56,
        fontFamily: "Nunito, sans-serif",
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
          marginBottom: 24,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        BOCA EM REPOUSO
      </Interactive.Div>

      <Item
        name="Lábios"
        numero="1"
        style={{
          opacity: interpolate(frame, [0.4 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0.4 * fps, 1.1 * fps],
            ["80px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Lábios fechados
      </Item>

      <Item
        name="Nariz"
        numero="2"
        style={{
          opacity: interpolate(frame, [1.2 * fps, 1.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [1.2 * fps, 1.9 * fps],
            ["80px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Ar entrando pelo nariz
      </Item>

      <Item
        name="Língua"
        numero="3"
        style={{
          opacity: interpolate(frame, [2 * fps, 2.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [2 * fps, 2.7 * fps],
            ["80px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Língua no céu da boca
      </Item>

      <Rodape cor="#6B3E26" />
    </AbsoluteFill>
  );
};

const posturaDeRepousoSchema = {} as const satisfies InteractivitySchema;

export const PosturaDeRepouso = Interactive.withSchema({
  Component: PosturaDeRepousoInner,
  componentName: "<PosturaDeRepouso>",
  schema: posturaDeRepousoSchema,
  wrapInSequence: true,
});
