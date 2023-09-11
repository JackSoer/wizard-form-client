import { ReactElement, useEffect, useState } from 'react';
import './input.scss';

const Input = (props: any): ReactElement => {
  const [focused, setFocused] = useState(false);
  const [changed, setChanged] = useState(false);
  const {
    label,
    nextWasClicked,
    serverErrMsg,
    onChange,
    errorMsg,
    ...inputProps
  } = props;
  const handleFocus = () => {
    setFocused(true);
  };

  const onHandleChange = (e: any) => {
    setChanged(true);

    onChange(e);
  };

  useEffect(() => {
    setChanged(false);
  }, [nextWasClicked]);

  return (
    <div className="box">
      <label htmlFor={inputProps.id} className="label">
        {label}
      </label>
      <input
        className="input"
        onChange={onHandleChange}
        {...inputProps}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      {errorMsg && <span className="pattern-error">{errorMsg}</span>}
      {serverErrMsg && !changed && (
        <span className="error">{serverErrMsg}</span>
      )}
    </div>
  );
};

export default Input;
