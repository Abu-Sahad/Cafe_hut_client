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
import AuthProviders from './Provides/AuthProviders';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoutes from './shared/PrivateRoutes/PrivateRoutes';
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
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ],
  },

  {
    path: 'chefCategories',
    element: <ChefDetailsLayout></ChefDetailsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoutes><SingleChefDetails></SingleChefDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://chef-hut-abu-sahad.vercel.app/chefCategories/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
