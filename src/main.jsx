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
      
    ]
  },


]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
