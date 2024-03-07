import { useEffect, useState } from "react";
import "./ButtonMenu.css";
import "../Button/Button.css";

const ButtonMenu = ({ children, label, icon, closeOnChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen();
    // eslint-disable-next-line
  }, closeOnChange);
  let baseClass = "ui-button-menu ";
  return (
    <div className={baseClass}>
      <button
        className="ui-button-menu-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="ui-button-menu-left-icon">{icon}</span>
        <span>{label}</span>{" "}
        <span
          className={`ui-button-menu-right-icon fa-solid ${
            isOpen ? "fa-times" : "fa-chevron-down"
          }`}
        />
      </button>
      {isOpen ? <div className="ui-button-menu-options">{children}</div> : ""}
    </div>
  );
};

export default ButtonMenu;
