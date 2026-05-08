import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import Contacto from "./pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: Nosotros },
      { path: "privacidad", Component: Privacidad },
      { path: "terminos", Component: Terminos },
      { path: "contacto", Component: Contacto },
    ],
  },
]);
