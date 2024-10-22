import { useEffect } from "react";
import AppHeader from "./components/ui/AppHeader";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchAppData } from "./state/main/mainSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppData());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
