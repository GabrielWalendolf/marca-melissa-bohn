import type React from "react";
import { Img, staticFile } from "remotion";

// Símbolo pequeno + nome, sempre no mesmo lugar, como nos posts do kit.
export const Rodape: React.FC<{ readonly cor: string }> = ({ cor }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: "0.2em",
        color: cor,
      }}
    >
      <Img src={staticFile("simbolo-cor.svg")} style={{ width: 64, height: 64 }} />
      MELISSA BOHN · FONOAUDIÓLOGA
    </div>
  );
};
