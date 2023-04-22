import "./App.css";
import { Header } from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import {
  FocusContext,
  init,
  useFocusable
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

function App() {
  const { focusKey, focusSelf } = useFocusable();

  init();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <Header />
        <Grid />
      </FocusContext.Provider>
    </>
  );
}

export default App;
