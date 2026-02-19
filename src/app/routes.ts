import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Register } from "./pages/Register";
import { Enroll } from "./pages/Enroll";
import { Donate } from "./pages/Donate";
import { Sponsorships } from "./pages/Sponsorships";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "register", Component: Register },
      { path: "enroll", Component: Enroll },
      { path: "donate", Component: Donate },
      { path: "sponsorships", Component: Sponsorships },
      { path: "events", Component: Events },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
