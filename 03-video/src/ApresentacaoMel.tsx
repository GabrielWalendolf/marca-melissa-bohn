import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { useVideoConfig } from "remotion";
import { Abertura } from "./Abertura";
import { Atendimento } from "./Atendimento";
import { Encerramento } from "./Encerramento";

export const ApresentacaoMel: React.FC = () => {
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
      <TransitionSeries.Sequence name="Linguagem infantil" durationInFrames={120} premountFor={fps}>
        <Atendimento
          numero="ATENDIMENTO 01"
          titulo="Linguagem infantil"
          texto="Fala, compreensão e comunicação no dia a dia da criança."
          icone="fala"
          fundo="#FFF8EC"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Universo Down" durationInFrames={120} premountFor={fps}>
        <Atendimento
          numero="ATENDIMENTO 02"
          titulo="Universo Down"
          texto="Comunicação de crianças com síndrome de Down, no ritmo de cada uma."
          icone="coracao"
          fundo="#FBE7B5"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Atendimento domiciliar" durationInFrames={120} premountFor={fps}>
        <Atendimento
          numero="ATENDIMENTO 03"
          titulo="Atendimento domiciliar"
          texto="A terapia acontece em casa, onde a criança já se sente à vontade."
          icone="casa"
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
