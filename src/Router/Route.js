import {
    createBrowserRouter,
  } from "react-router-dom";
import Category from "../Components/Category/Category";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Registration from "../Components/Registration/Registration"
import AddProduct from '../Components/AddProduct/AddProduct'
import MyProduct from '../Components/MyProduct/MyProduct'
import SellerRouter from "../Components/PrivateRoute/SellerRoute";
import Unauthorized from "../Components/Unauthorized/Unauthorized";
import BuyerRoute from "../Components/PrivateRoute/BuyerRoute";
import MyWishList from "../Components/MyWishList/MyWishList"
import MyOrder from "../Components/MyOrder/MyOrder";
  export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader:  async ({params}) => 
              fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            children:[
              {
                path:"/dashboard/addProduct",
                element:<SellerRouter><AddProduct></AddProduct></SellerRouter>
              },
              {
                path:"/dashboard/myProduct",
                element:<SellerRouter><MyProduct></MyProduct></SellerRouter>
              },
              {
                path:"/dashboard/myOrder",
                element:<BuyerRoute><MyOrder></MyOrder></BuyerRoute>
              },
              {
                path:"/dashboard/myWishlist",
                element:<BuyerRoute><MyWishList></MyWishList></BuyerRoute>
              }
            ]
          },
        ],
      },
      {
          path:"/login",
          element:<Login></Login>,
      },
      {
        path:"/unauthorized",
        element:<Unauthorized></Unauthorized>,
      },
      {
          path:"/register",
          element:<Registration></Registration>
      },
      {
        path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
      }
    ]);