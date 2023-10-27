import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './Layouts/Home';
import Ems from './Components/Ems';
import Expense from './Components/Expense';
import Login from "./Pages/Login/Login";
import './index.css';
import Signup from "./Pages/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:'/ems/*',
        element:<Ems />
      },
      {
        path:'/expense-tracker/*',
        element:<Expense />
      }
    ]
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<Signup />
  }
],{basename:"/"});

export default function Root(props) {
  return <RouterProvider router={router}/>
}
