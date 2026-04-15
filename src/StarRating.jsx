const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const StarContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
};

export default StarRating;
