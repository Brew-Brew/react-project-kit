import Main from "./pages/Main";
import ExampleComponent from "./pages/ExampleComponent";
const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: "/example",
    exact: true,
    component: ExampleComponent
  }
];

export default routes;
