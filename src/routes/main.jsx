import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home";
import Contacts from "./Contacts/Contacts";
import Locations from "./Locations/Locations";
import HeaderLayout from "../layouts/HeaderLayout";
import Login from "../Components/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<HeaderLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/about" element={<h1> about </h1>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Locations />} />
      </Route>
    )
  );