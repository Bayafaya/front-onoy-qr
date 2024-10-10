import { MainLayoutAsync } from "./layouts/MainLayout.async";
import { WelcomeLayoutAsync } from "./layouts/WelcomeLayout.async";
import Detail from "./pages/detail/Detail";
import { HomeAsync } from "./pages/home/Home.async";
import Orders from "./pages/orders/Orders";
import { WelcomeAsync } from "./pages/welcome/Welcome.async";

const routes = [
  {
    element: <WelcomeLayoutAsync />,
    path: "/welcome",
    children: [
      {
        index: true,
        element: <WelcomeAsync />,
      },
    ],
  },
  {
    element: <MainLayoutAsync />,
    path: "/",
    children: [
      {
        index: true,
        element: <HomeAsync />,
      },
    ],
  },
  {
    element: <MainLayoutAsync />,
    path: "/detail",
    children: [
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
  {
    element: <MainLayoutAsync />,
    path: "/orders",
    children: [
      {
        path: ":id",
        element: <Orders />,
      },
    ],
  },
];

export default routes;
