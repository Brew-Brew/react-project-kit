import MainComponent from "./pages/MainComponent";
import ExampleComponent from "./pages/ExampleComponent";
import UseReduxComponent from "./pages/UseReduxComponent";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainComponent
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
