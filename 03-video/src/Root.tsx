import { Composition, Folder } from "remotion";
import { Abertura } from "./Abertura";
import { ApresentacaoMel } from "./ApresentacaoMel";
import { Atendimento } from "./Atendimento";
import { CuriosidadeLingua } from "./CuriosidadeLingua";
import { Dica } from "./Dica";
import { Encerramento } from "./Encerramento";
import { LinguaEmRepouso } from "./LinguaEmRepouso";
import { Pergunta } from "./Pergunta";
import { PosturaDeRepouso } from "./PosturaDeRepouso";
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
      {/* 150 + 105 + 180 + 150 + 165 + 165 − 5×15 de transição = 840. */}
      <Composition
        id="CuriosidadeLingua"
        component={CuriosidadeLingua}
        durationInFrames={840}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Cenas-curiosidade">
        <Composition
          id="Pergunta"
          component={Pergunta}
          durationInFrames={105}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            etiqueta: "CURIOSIDADE",
            pergunta: "Onde fica a língua quando a gente não está falando?",
            fundo: "#FFF8EC",
          }}
        />
        <Composition
          id="LinguaEmRepouso"
          component={LinguaEmRepouso}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="PosturaDeRepouso"
          component={PosturaDeRepouso}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Dica"
          component={Dica}
          durationInFrames={165}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{
            etiqueta: "DICA",
            titulo: "Repare nos momentos distraídos.",
            texto:
              "Brincando ou vendo desenho, a boca da criança fica aberta com frequência? Vale conversar com uma fonoaudióloga.",
            fundo: "#FFF8EC",
          }}
        />
      </Folder>
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
          defaultProps={{
            style: { position: "absolute", left: 260, top: 260 },
          }}
        />
      </Folder>
    </>
  );
};
