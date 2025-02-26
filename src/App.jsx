import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatScreen from "./Pages/ChatScreen";
import RouterConfig from "./Router/RouterConfig";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./Context/ContactContext";

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
