import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatApp from "./pages/ChatApp";
import AppLayout from "./components/AppLayout";
import Contacts from "./pages/Contacts";
import Friends from "./pages/Friends";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="chat" replace /> },
      { path: "chat", Component: ChatApp },
      { path: "contacts", Component: Contacts },
      { path: "friends", Component: Friends },
      { path: "notifications", Component: Notifications },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
