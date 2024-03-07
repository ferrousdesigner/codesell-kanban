import "./Button.css";
const Button = ({ children, canSubmit, onClick, disabled }) => {
  let baseClass = "ui-button ";
  return (
    <button
      disabled={disabled}
      type={canSubmit ? "submit" : "button"}
      className={baseClass}
      onClick={!disabled && onClick}
    >
      {children}
    </button>
  );
};

export default Button;
