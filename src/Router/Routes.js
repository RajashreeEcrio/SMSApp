import ChatScreen from "../Pages/ChatScreen";
import Contacts from "../Pages/Contacts";
import Login from "../Pages/Login";

export const routeData = [
  {
    path: "/",
    element: Login,
    key: "Login",
  },
  {
    path: "/contacts",
    element: Contacts,
    key: "Contacts",
  },
  {
    path: "/chatscreen",
    element: ChatScreen,
    key: "ChatScreen",
  },
];
