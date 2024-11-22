import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './components/Root/Root.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import GadgetCards from './components/GadgetCards/GadgetCards.jsx';
import GadgetInfo from './components/GadgetInfo/GadgetInfo.jsx';
import Statictics from './components/Statictics/Statictics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[
          {
            path: '/',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadgets.json')
          },
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../gadgets.json')
          },
        ],
      },
      {
        path: '/gadget/:id',
        element: <GadgetInfo></GadgetInfo>,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/Statictics',
        element:<Statictics></Statictics>,
        loader:() => fetch('../categories.json'),
        loader:() => fetch('../gadgets.json')
      },
      {
        path: '/Dashboard',
        element:<Dashboard></Dashboard>
      },
      
    ]
  },


]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
