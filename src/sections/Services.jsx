import { services } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
const Services = () => {
  return <section className="flex justify-center max-container gap-9 flex-wrap ">
    {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
  </section>;
};
export default Services;
