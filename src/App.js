import { useEffect } from "react";
import AppHeader from "./components/ui/AppHeader";
import { useDispatch } from "react-redux";
import { fetchAppData } from "./state/restaurants/restaurantsSlice";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppData());
  }, []);

  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
