import { createBrowserRouter } from "react-router";
import Layout from "../Pages/Layout/Layout";
import ComingContainer from "../Pages/CapitalizeGoodz/CapitalizeGoodzContainer";
import GroupsContainer from "../Pages/Groups/GroupsContainer";
import ProductsContainer from "../Pages/Products/ProductsContainer";
import UsersContainer from "../Pages/Users/UsersContainer";
import SettingsContainer from "../Pages/Setting/SettingContainer";

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
    ],
  },
]);

export default router;
