import { ChangeEvent, useState } from 'react';
import UserType from '../../types/UserType.type';
import './phoneInput.scss';

type PhoneInputProps = {
  updateUserFields: (userNewFields: Partial<UserType>) => void;
};

const PhoneInput = ({ updateUserFields }: PhoneInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const formatPhoneNumber = (value: string): string => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneLength = phoneNumber.length;

    if (phoneLength < 4) return phoneNumber;
    if (phoneLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedNumber);

    updateUserFields({ phone: formattedNumber });
  };

  return (
    <div className="box">
      <label htmlFor="phone" className="phone-label">
        Phone
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder="(xxx) xxx-xxxx"
        className="phone-input"
      />
    </div>
  );
};

export default PhoneInput;
