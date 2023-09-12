import { ReactElement, useState } from 'react';
import UserType from '../../types/UserType.type';
import './phoneInput.scss';
import { default as PhoneInputElement } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type PhoneInputProps = {
  updateUserFields: (userNewFields: Partial<UserType>) => void;
  phone: string;
};

const PhoneInput = ({
  updateUserFields,
  phone,
}: PhoneInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState(phone);

  const handleChange = (
    // @ts-ignore
    value: string,
    // @ts-ignore
    data: any,
    // @ts-ignore
    event: any,
    formattedPhone: string
  ) => {
    setInputValue(formattedPhone);

    updateUserFields({ phone: formattedPhone });
  };

  return (
    <div className="box">
      <label htmlFor="phone" className="phone-label">
        Phone
      </label>
      <PhoneInputElement
        country="us"
        value={inputValue}
        onChange={handleChange}
        inputClass="phone-input"
        inputProps={{
          required: true,
          name: 'phone',
          id: 'phone',
          type: 'tel',
        }}
      />
    </div>
  );
};

export default PhoneInput;
