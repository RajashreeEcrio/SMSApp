import ChatScreen from "../Pages/ChatScreen";
import Contacts from "../Pages/Contacts";

export const routeData = [
  {
    path: "/",
    element: Contacts,
    key: "Contacts",
  },
  {
    path: "/chatscreen",
    element: ChatScreen,
    key: "ChatScreen",
  },
];
