import { useEffect } from "react";
import AppHeader from "./components/ui/AppHeader";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchAppData } from "./state/main/mainSlice";
import Sidebar from "./components/Sidebar";

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
