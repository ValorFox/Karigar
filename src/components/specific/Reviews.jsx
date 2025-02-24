import { Star } from "@phosphor-icons/react";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          weight={`${i < rating ? "fill" : "regular"}`}
          className="w-5 h-5"
        />
      ))}
    </div>
  );
}

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review,index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <StarRating rating={review.rating} />
                <span className="font-semibold">{review.reviewer_name}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {review.date}
              </span>
            </div>
            <p className="mt-2 text-muted-foreground">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
