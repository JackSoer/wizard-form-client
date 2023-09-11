import './select.scss';

const Select = (props: any) => {
  const { children, onChange, label, ...inputProps } = props;

  return (
    <div className="select-box">
      <label htmlFor="country" className="label">
        {label}
      </label>
      <select {...inputProps} className="select" onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default Select;
