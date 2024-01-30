import { useEffect } from "react";
import AppBody from "./components/ui/AppBody";
import AppHeader from "./components/ui/AppHeader";
import { useDispatch } from "react-redux";
import { fetchAppData } from "./state/main/mainSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppData());
  }, []);

  return (
    <>
      <AppHeader />
      <hr />
      <AppBody />
    </>
  );
}

export default App;
