import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const Offer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="objeyc-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensurinf premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality ,innovation and a touch of elegnace.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures you satisfaction.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"></Button>
        </div>
      </div>
    </section>
  );
};
export default Offer;
