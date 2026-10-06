import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { useVideoConfig } from "remotion";
import { Abertura } from "./Abertura";
import { Dica } from "./Dica";
import { Encerramento } from "./Encerramento";
import { LinguaEmRepouso } from "./LinguaEmRepouso";
import { Pergunta } from "./Pergunta";
import { PosturaDeRepouso } from "./PosturaDeRepouso";

export const CuriosidadeLingua: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Abertura" durationInFrames={150} premountFor={fps}>
        <Abertura />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Pergunta" durationInFrames={105} premountFor={fps}>
        <Pergunta
          etiqueta="CURIOSIDADE"
          pergunta="Onde fica a língua quando a gente não está falando?"
          fundo="#FFF8EC"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Língua em repouso" durationInFrames={180} premountFor={fps}>
        <LinguaEmRepouso />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Boca em repouso" durationInFrames={150} premountFor={fps}>
        <PosturaDeRepouso />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Dica" durationInFrames={165} premountFor={fps}>
        <Dica
          etiqueta="DICA"
          titulo="Repare nos momentos distraídos."
          texto="Brincando ou vendo desenho, a boca da criança fica aberta com frequência? Vale conversar com uma fonoaudióloga."
          fundo="#FFF8EC"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Encerramento" durationInFrames={165} premountFor={fps}>
        <Encerramento />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
