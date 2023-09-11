import { ReactElement } from 'react';
import countries from '../../data/countries';
import inputData from '../../data/inputData';
import UserType from '../../types/UserType.type';
import Birthdate from '../birthdate/Birthdate';
import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';
import Select from '../select/Select';

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
      {inputData.firstPart.map((input) => {
        if (input.name === 'birthdate') {
          return (
            <Birthdate
              onChange={onChange}
              value={user[input.name as keyof UserType]}
              {...input}
              key={input.name}
            />
          );
        } else if (input.name === 'country') {
          return (
            <Select
              onChange={onChange}
              value={user[input.name as keyof UserType]}
              label={input.label}
              {...input}
              key={input.name}
            >
              <option value="" key={'default'}></option>
              {countries.map((country) => (
                <option value={country.name} key={country.code}>
                  {country.name}
                </option>
              ))}
            </Select>
          );
        } else if (input.name === 'phone') {
          return (
            <PhoneInput updateUserFields={updateUserFields} key={input.name} />
          );
        } else {
          return (
            <Input
              onChange={onChange}
              value={user[input.name as keyof UserType]}
              {...input}
              key={input.id}
            />
          );
        }
      })}
    </>
  );
};

export default UserFormFirst;
