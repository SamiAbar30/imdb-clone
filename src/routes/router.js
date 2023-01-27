import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/detail/:Id",
        element: <Detail/>,
      },
      {
        path: "/watch-list",
        element: <WatchList/>,
      },
    ]
  },
]);