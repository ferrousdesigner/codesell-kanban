import "./Flex.css";
const Flex = ({ className, style, alignment, isColumn, children }) => {
  let baseClass = "ui-flex ";
  if (isColumn) baseClass += "ui-flex-column";
  if (alignment === "center") baseClass += "ui-flex-center";
  if (alignment === "start") baseClass += "ui-flex-start";
  if (alignment === "end") baseClass += "ui-flex-end";
  return (
    <div className={baseClass + (className || "")} style={style}>
      {children}
    </div>
  );
};

export default Flex;
