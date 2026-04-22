import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />
      <h2>This movie was rated {movieRating} stars</h2>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      size={2}
      color="yellowgreen"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={4}
    />
    <Test />
  </StrictMode>,
);
