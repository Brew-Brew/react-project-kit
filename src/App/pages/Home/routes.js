import MainComponent from "./pages/MainComponent";
import ExampleComponent from "./pages/ExampleComponent";
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
  }
];

export default routes;
