import "./Header.css";
const Header = ({ children, bold, accent }) => {
  let baseClass = "ui-header ";
  if (bold) baseClass += " ui-header-bold";
  if (accent) baseClass += " ui-header-accent";
  return <div className={baseClass}>{children}</div>;
};

export default Header;
