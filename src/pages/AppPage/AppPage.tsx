import { useState, useEffect, createContext } from "react";
import SignedInHeader from "../../components/SignedInHeader";
import PlotInput from "../../components/PlotInput";
import PlotOutput from "../../components/PlotOutput";

export const PlotContext = createContext<any>({});

const AppPage = () => {
  const [plotInput, setPlotInput] = useState<any>({});
  const [plotOutput, setPlotOutput] = useState<string>("");

  const PlotContextProvider = {
    plotInput,
    setPlotInput,
    plotOutput,
    setPlotOutput,
  };

  useEffect(() => {
    if (Object.keys(plotInput).length === 0) return;
    console.log(plotInput);
    (async function craftPlot() {
      const res = await fetch("/api/v1/plot/craft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plotInput),
      });
      const data = await res.json();
      setPlotOutput(data.craftedPlot);
    })();
  }, [plotInput]);

  return (
    <>
      <PlotContext.Provider value={PlotContextProvider}>
        <SignedInHeader />
        <PlotInput />
        <PlotOutput />
      </PlotContext.Provider>
    </>
  );
};

export default AppPage;
