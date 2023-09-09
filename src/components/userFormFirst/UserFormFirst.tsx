import { ReactElement } from 'react';
import countries from '../../data/countries';
import inputData from '../../data/inputData';
import UserType from '../../types/UserType.type';
import cutString from '../../utils/cutString';
import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

type UserFormFirstProps = {
  user: UserType;
  onChange: (e: any) => void;
  updateUserFields: (userNewFields: Partial<UserType>) => void;
};

const UserFormFirst = ({
  user,
  onChange,
  updateUserFields,
}: UserFormFirstProps): ReactElement => {
  return (
    <>
      {inputData.firstPart.map((input) => (
        <Input
          onChange={onChange}
          value={user[input.name as keyof UserType]}
          {...input}
          key={input.id}
        />
      ))}

      <PhoneInput updateUserFields={updateUserFields} />

      <div className="user-form__date">
        <label htmlFor="birthdate" className="user-form__label">
          Birthdate
        </label>
        <input
          type="date"
          className="user-form__date-input"
          name="birthdate"
          id="birthdate"
          required
          value={user.birthdate}
          onChange={(e) => updateUserFields({ birthdate: e.target.value })}
        />
      </div>
      <div className="user-form__select-box">
        <label htmlFor="country" className="user-form__label">
          Country
        </label>
        <select
          name="country"
          id="country"
          className="user-form__select"
          required
          value={user.country}
          onChange={(e) => updateUserFields({ country: e.target.value })}
        >
          <option value=""></option>
          {countries.map((country) => (
            <option value={country.name} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default UserFormFirst;
