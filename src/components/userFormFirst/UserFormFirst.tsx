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
  errors: string[];
  nextWasClicked: number;
};

const UserFormFirst = ({
  user,
  onChange,
  updateUserFields,
  errors,
  nextWasClicked,
}: UserFormFirstProps): ReactElement => {
  const extractErrors = (errors: string[]) => {
    type ExtractedErrorsType = {
      email: string;
    };

    let extractedErrors: ExtractedErrorsType = {
      email: '',
    };

    if (errors.includes('Email already taken')) {
      extractedErrors.email = 'Email already taken';
    }

    return extractedErrors;
  };

  const extractedErrors = extractErrors(errors);

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
        } else if (input.name === 'email') {
          return (
            <Input
              onChange={onChange}
              value={user[input.name as keyof UserType]}
              {...input}
              key={input.id}
              serverErrMsg={extractedErrors.email}
              nextWasClicked={nextWasClicked}
            />
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
