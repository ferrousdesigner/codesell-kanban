import "./Select.css";
const Select = ({ options, value, onChange, disabled, className, style }) => {
  let baseClass = "ui-select ";
  return (
    <select
      className={baseClass + className}
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={style}
    >
      {options?.map((op, key) => (
        <option key={key} value={op.value || op.label}>
          {op.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
