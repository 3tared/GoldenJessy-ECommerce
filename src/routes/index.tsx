import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// layouts
import RootLayout from '@layouts/RootLayout/RootLayout';
//pages
import Home from '@pages/Home';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products/:prefix',
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== 'string' ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response('Bad Request', {
              status: 400,
              statusText: 'Category Does Not Exist!',
            });
          }
          return true;
        },
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
