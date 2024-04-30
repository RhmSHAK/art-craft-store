import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './componenet/NotFound.jsx';
import Home from './componenet/Home.jsx';
import AllArtCraft from './componenet/AllArtCraft.jsx';
import AddArtCraftList from './componenet/AddArtCraftList.jsx';
import MyArtCraftList from './componenet/MyArtCraftList.jsx';
import Login from './componenet/Login.jsx';
import Register from './componenet/Register.jsx';
import Root from './componenet/Root.jsx';
import Update from './componenet/Update.jsx';
import AuthProvider from './AuthOrovider/AuthProvider.jsx';
import PrivetRoute from './Routers/PrivetRoute.jsx';
import ViewDetails from './componenet/ViewDetails.jsx';
import AllCategorys from './componenet/AllCategorys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound> ,
    children: [
      {
        path: "/" ,
        element:<Home></Home>
        
      },
      {
        path: "/allArt",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/art')
      },
      {
        path: "/addArt",
        element: <PrivetRoute>
                               <AddArtCraftList></AddArtCraftList>
                 </PrivetRoute>
      },
      {
        path: "/myArt",
        element: <PrivetRoute><MyArtCraftList></MyArtCraftList></PrivetRoute>,
        //loader: ({params}) => fetch(`http://localhost:5000/art/${params.email}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/list/${params.id}`)
      },
      {
        path: '/view/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/list/${params.id}`)

      },
      {
        path:'/allList/:subCategory',
        element:<AllCategorys></AllCategorys> ,
        loader: ({params})=>fetch(`http://localhost:5000/allCategory/${params.subCategory}`)
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
