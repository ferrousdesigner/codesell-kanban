import "./Space.css";
const Space = ({ className }) => {
  let baseClass = "ui-space ";
  return <div className={baseClass + (className || "")} />;
};

export default Space;
