import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import About from '../pages/about/page';
import Services from '../pages/services/page';
import ServiceAreas from '../pages/service-areas/page';
import ServiceHubPage from '../pages/services/service-hub/page';
import ServiceLocationPage from '../pages/services/location/page';
import ContactPage from '../pages/contact/page';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/services', element: <Services /> },
  { path: '/services/:serviceSlug', element: <ServiceHubPage /> },
  { path: '/services/:serviceSlug/:stateSlug', element: <ServiceHubPage /> },
  { path: '/services/:serviceSlug/:stateSlug/:citySlug', element: <ServiceLocationPage /> },
  { path: '/about', element: <About /> },
  { path: '/locations', element: <ServiceAreas /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
