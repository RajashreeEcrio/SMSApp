import "./App.css";
import RouterConfig from "./Router/RouterConfig";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./Context/ContactContext";
import { UserDataProvider } from "./Context/UserDataContext";

function App() {
  return (
    <UserDataProvider>
      <ContactProvider>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </ContactProvider>
    </UserDataProvider>
  );
}

export default App;
