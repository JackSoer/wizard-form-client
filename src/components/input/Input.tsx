import { ReactElement, useState } from 'react';
import './input.scss';

const Input = (props: any): ReactElement => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMsg, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="box">
      <label htmlFor={inputProps.id} className="label">
        {label}
      </label>
      <input
        className="input"
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error">{errorMsg}</span>
    </div>
  );
};

export default Input;
