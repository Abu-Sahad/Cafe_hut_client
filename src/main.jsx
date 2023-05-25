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

  // {
  //   path: 'category',
  //   element: <Main></Main>,
  //   children: [
  //       {
  //           path: ':id',
  //           element: <Category></Category>,
  //           loader: ({params}) => fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/categories/${params.id}`)
  //       }
  //   ]
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
