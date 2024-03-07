import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "./NotFound";
import Navigation from "../Components/AppSpecific/Nav/Navigation";

const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ];
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {routes?.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
