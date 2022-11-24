import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Registration from "../Components/Registration/Registration"
  
  export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
        ],
      },
      {
          path:"/login",
          element:<Login></Login>,
      },
      {
          path:"/register",
          element:<Registration></Registration>
      },
      {
        path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
      }
    ]);