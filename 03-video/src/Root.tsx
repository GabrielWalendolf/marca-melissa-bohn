import { Composition, Folder } from "remotion";
import { Abertura } from "./Abertura";
import { ApresentacaoMel } from "./ApresentacaoMel";
import { Atendimento } from "./Atendimento";
import { Encerramento } from "./Encerramento";
import { PoteDeMel } from "./PoteDeMel";

// Vertical 9:16 para Reels e Stories. 150 + 3×120 + 165 − 4×15 de transição = 615.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ApresentacaoMel"
        component={ApresentacaoMel}
        durationInFrames={615}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Cenas">
        <Composition
          id="Abertura"
          component={Abertura}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Atendimento"
          component={Atendimento}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            numero: "ATENDIMENTO 01",
            titulo: "Linguagem infantil",
            texto: "Fala, compreensão e comunicação no dia a dia da criança.",
            icone: "fala",
            fundo: "#FFF8EC",
          }}
        />
        <Composition
          id="Encerramento"
          component={Encerramento}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
      <Folder name="Elementos">
        <Composition
          id="PoteDeMel"
          component={PoteDeMel}
          durationInFrames={90}
          fps={30}
          width={1080}
          height={1080}
        />
      </Folder>
    </>
  );
};
