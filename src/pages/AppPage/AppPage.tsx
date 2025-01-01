import { useState, useEffect, createContext } from "react";
import SignedInHeader from "../../components/SignedInHeader";
import PlotInput from "../../components/PlotInput";
import PlotOutput from "../../components/PlotOutput";

export const PlotContext = createContext<any>({});

const AppPage = () => {
  const [plotInput, setPlotInput] = useState<any>({});
  const [plotOutput, setPlotOutput] = useState<string>("");
  const [isCrafting, setIsCrafting] = useState<boolean>(false);

  const PlotContextProvider = {
    plotInput,
    setPlotInput,
    plotOutput,
    setPlotOutput,
    isCrafting,
    setIsCrafting,
  };

  useEffect(() => {
    if (Object.keys(plotInput).length === 0) return;
    setPlotOutput("");
    (async function craftPlot() {
      const res = await fetch("/api/v1/plot/craft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plotInput),
      });
      const reader = res.body?.pipeThrough(new TextDecoderStream()).getReader();
      let currentPlot = "";
      while (true) {
        const result = await reader?.read();
        if (!result) return;
        const { value, done } = result;
        if (done) {
          // setIsCrafting(false);
          return;
        }
        // console.log(JSON.parse(value).craftedPlot);
        plotOutput + JSON.parse(value).craftedPlot;
        currentPlot = currentPlot + JSON.parse(value).craftedPlot;
        setPlotOutput(currentPlot);
      }
    })();
  }, [plotInput]);

  return (
    <>
      <PlotContext.Provider value={PlotContextProvider}>
        <SignedInHeader />
        {isCrafting ? <PlotOutput /> : <PlotInput />}
      </PlotContext.Provider>
    </>
  );
};

export default AppPage;
