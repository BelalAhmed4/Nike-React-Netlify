import { star } from "../assets/icons";

export const Reviewcard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="text-center max-w-sm mt-6 info-text">{feedback}</p>
      <div className="gap-2.5 flex justify-center items-center mt-3">
        <img width={24} height={24} src={star} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};
export default Reviewcard;
