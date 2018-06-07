import Reside from './pages/Reside';
import Review from './pages/Review';
import DetailInfo from './pages/DetailInfo';
import SearchInfo from './pages/SearchInfo';
const routes = [
  {
    path: '/',
    exact: true,
    component: Reside,
  },
  {
    path: '/review',
    exact: true,
    component: Review,
  },
  {
    path: '/searchDetail',
    exact: true,
    component: DetailInfo,
  },
  {
    path: '/search',
    exact: true,
    component: SearchInfo,
  },
];

export default routes;
