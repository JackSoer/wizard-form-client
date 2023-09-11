import './birthdate.scss';

const Birthdate = (props: any) => {
  const { onChange, ...inputProps } = props;
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="birthdate">
      <label htmlFor="birthdate" className="birthdate__label">
        Birthdate
      </label>
      <input
        className="birthdate__input"
        {...inputProps}
        onChange={onChange}
        max={today}
      />
    </div>
  );
};

export default Birthdate;
