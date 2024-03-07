import { StateProvider } from "./Appstate/Provider";
import AppRoutes from "./Routes/Routes";

const App = () => {
  return (
    <>
      <StateProvider>
        <AppRoutes />
      </StateProvider>
    </>
  );
};

export default App;
