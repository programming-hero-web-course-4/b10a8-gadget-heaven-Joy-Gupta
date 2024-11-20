import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Stats from "../pages/Stats";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
import Error from "../pages/Error";
import GadgetDetails from "../pages/GadgetDetails";
import Faq from "../pages/FAQ";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetCards />,
            loader: () => fetch('../gadgets.json')
          },
          {
            path: '/category/:category',
            element: <GadgetCards />,
            loader: () => fetch('../gadgets.json')
          },
        ],
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetails />,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/stats',
        element: <Stats />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/faq',
        element: <Faq/>
      }
    ],
  },

]);
export default routes;