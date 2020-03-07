import App from "./containers/App";
import Admin from "./containers/Admin";
import Site from "./containers/Site";

export default [
  {
    component: App,
    routes: [
      {
        path: "/admin",
        component: Admin
      },
      {
        path: "*",
        component: Site
      }
    ]
  }
];
