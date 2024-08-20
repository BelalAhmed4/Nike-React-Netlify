import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center ">
        What our <span className="text-coral-red">customers </span>say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us
      </p>
      <div className="mt-24 flex justify-evenly flex-1 items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            feedback={review.feedback}
            imgURL={review.imgURL}
            rating={review.rating}
            customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
