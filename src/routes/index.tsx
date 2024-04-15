import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// layouts
import RootLayout from '@layouts/RootLayout/RootLayout';
//pages
import Home from '@pages/Home';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products/:prefix',
        element: <Products />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
