import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './routes/Header/Contacts/Contacts.jsx';
import Locations from "./routes/Header/Locations/Locations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/About",
    element: <h1>About us</h1>,
  },
  {
    path: "/Contacts",
    element: <Contacts/>,
  },
  {
    path: "/Locations",
    element: <Locations/>,
  },
  {
    path: "/Locations/:id",
    element: <h1> heila </h1>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
