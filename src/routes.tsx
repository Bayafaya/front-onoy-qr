import { MainLayoutAsync } from "./layouts/MainLayout.async";
import { WelcomeLayoutAsync } from "./layouts/WelcomeLayout.async";
import { DetailAsync } from "./pages/detail/Detail.async";
import { HomeAsync } from "./pages/home/Home.async";
import { OrdersAsync } from "./pages/orders/Oreders.async";
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
        element: <DetailAsync />,
      },
    ],
  },
  {
    element: <MainLayoutAsync />,
    path: "/orders",
    children: [
      {
        index: true,
        element: <OrdersAsync />,
      },
    ],
  },
];

export default routes;
