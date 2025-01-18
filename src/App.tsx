import SideBar from "./components/SideBar";
import { SideContextProvider } from "./stores/SideContextProvider";
import MarkdownEditor from "./components/MarkdownEditor";
import Md from "./assets/test.md?raw";

function App() {
  return (
    <>
      <SideContextProvider>
        <SideBar />
      </SideContextProvider>
      <div className="content-box">
        <MarkdownEditor md={Md} />
      </div>
    </>
  );
}

export default App;
