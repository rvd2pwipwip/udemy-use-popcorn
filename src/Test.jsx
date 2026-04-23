import React from "react";
import StarRating from "./StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating
        color="red"
        maxRating={10}
        onSetRating={setMovieRating}
        defaultRating={5}
      />
      {movieRating > 0 && <h2>This movie was rated {movieRating} stars</h2>}
    </div>
  );
};

export default Test;
