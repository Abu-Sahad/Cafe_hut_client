import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginLayout from './Layout/LoginLayout.jsx';
import Main from './Layout/Main.jsx';
import Login from './shared/Login/Login';
import Registration from './shared/Registration/Registration';
import ChefDetailsLayout from './Layout/ChefDetailsLayout';
import SingleChefDetails from './pages/SingleChefDeatils/SingleChefDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
    ],
  },

  {
    path: 'chefCategories',
    element:<ChefDetailsLayout></ChefDetailsLayout>,
    children: [
        {
            path: ':id',
            element: <SingleChefDetails></SingleChefDetails>,
             loader: ({params}) => fetch(`http://127.0.0.1:5000/chefCategories/${params.id}`)
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
