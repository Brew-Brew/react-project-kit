import Main from "./pages/Main";
import ExampleComponent from "./pages/ExampleComponent";
import UseReduxComponent from "./pages/UseReduxComponent";

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
  },
  {
    path: "/useRedux",
    exact: true,
    component: UseReduxComponent
  }
];

export default routes;
