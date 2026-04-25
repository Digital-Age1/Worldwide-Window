import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import LocationBreadcrumb from './components/LocationBreadcrumb';
import LocationHero from './components/LocationHero';
import LocationBenefits from './components/LocationBenefits';
import LocationCTA from './components/LocationCTA';
import RelatedServices from './components/RelatedServices';
import {
  getServiceBySlug,
  getStateBySlug,
  getCityBySlug,
  getCityIntro,
  getRelatedServices,
} from '@/mocks/locationData';

export default function ServiceLocationPage() {
  const { serviceSlug = '', stateSlug = '', citySlug = '' } = useParams<{
    serviceSlug: string;
    stateSlug: string;
    citySlug: string;
  }>();

  const service = getServiceBySlug(serviceSlug);
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);

  if (!service || !state || !city) {
    return <Navigate to="/services" replace />;
  }

  const intro = getCityIntro(serviceSlug, citySlug);
  const relatedServices = getRelatedServices(serviceSlug);

  const breadcrumbs = [
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${serviceSlug}` },
    { label: state.name, href: `/services/${serviceSlug}/${stateSlug}` },
    { label: city.name },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LocationBreadcrumb items={breadcrumbs} />
        <LocationHero
          serviceTitle={service.title}
          cityName={city.name}
          stateName={state.name}
          stateAbbr={state.abbr}
          intro={intro}
          serviceIcon={service.icon}
          serviceSlug={serviceSlug}
        />
        <LocationBenefits
          serviceTitle={service.title}
          cityName={city.name}
          stateName={state.name}
          bullets={service.bullets}
        />
        <LocationCTA
          serviceTitle={service.title}
          cityName={city.name}
          stateAbbr={state.abbr}
        />
        <RelatedServices
          services={relatedServices}
          citySlug={citySlug}
          stateSlug={stateSlug}
          cityName={city.name}
        />
      </main>
      <Footer />
    </div>
  );
}
