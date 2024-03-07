const Card = ({ children }) => {
  let baseClass = "ui-card ";
  return <div className={baseClass}>{children}</div>;
};

export default Card;
