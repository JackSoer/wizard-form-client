import './textarea.scss';

const Textarea = (props: any) => {
  const { onChange, label, ...inputProps } = props;

  return (
    <div className="textarea">
      <label htmlFor="aboutMe" className="textarea__label">
        {label}
      </label>
      <textarea
        {...inputProps}
        className="textarea__item"
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
