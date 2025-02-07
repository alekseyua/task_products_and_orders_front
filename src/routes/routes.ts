import { createBrowserRouter } from "react-router";
import Layout from "../Pages/Layout/Layout";
import { lazy } from "react";
const ComingContainer = lazy(() => import( "../Pages/CapitalizeGoodz/CapitalizeGoodzContainer"));
const GroupsContainer = lazy(() => import( "../Pages/Groups/GroupsContainer"));
const ProductsContainer = lazy(() => import( "../Pages/Products/ProductsContainer"));
const UsersContainer = lazy(() => import( "../Pages/Users/UsersContainer"));
const SettingsContainer = lazy(() => import( "../Pages/Setting/SettingContainer"));

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,    
    children: [
      {
        path: "/",
        Component: ComingContainer,
      },
      {
        path: "/groups",
        Component: GroupsContainer,
      },
      {
        path: "/products",
        Component: ProductsContainer,
      },
      {
        path: "/users",
        Component: UsersContainer,
      },
      {
        path: "/setting",
        Component: SettingsContainer,
      },
      {
        path: '*',
        element: 'no match'
      }
    ],
  },
]);

export default router;
