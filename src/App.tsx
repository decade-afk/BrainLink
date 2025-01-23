import SideBar from "./components/SideBar";
import { SideContextProvider } from "./stores/SideContextProvider";
import "./css/default.css";

function App() {
  return (
    <>
      <SideContextProvider>
        <SideBar />
      </SideContextProvider>
    </>
  );
}

export default App;
