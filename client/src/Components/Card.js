// Card.jsx
const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
