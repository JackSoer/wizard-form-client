import { ChangeEvent, ReactElement, useState } from 'react';
import UserType from '../../types/UserType.type';
import './phoneInput.scss';

type PhoneInputProps = {
  updateUserFields: (userNewFields: Partial<UserType>) => void;
  phone: string;
};

const PhoneInput = ({
  updateUserFields,
  phone,
}: PhoneInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState(phone || '+1');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const formatPhoneNumber = (value: string): string => {
    if (!value) return value;

    const phoneNumber = value.replace(/^\+1|\D+/g, '');
    const phoneLength = phoneNumber.length;

    if (phoneLength < 4) {
      return `+1 ${phoneNumber}`;
    }
    if (phoneLength < 7) {
      return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValidPhoneNumber(true);

    const formattedNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedNumber);

    updateUserFields({ phone: formattedNumber });
  };

  const handleValidation = (phoneNumber: string) => {
    if (phoneNumber.length !== 17) {
      setIsValidPhoneNumber(false);
    } else {
      setIsValidPhoneNumber(true);
    }
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
        onBlur={() => handleValidation(inputValue)}
        placeholder="+1 (xxx) xxx-xxxx"
        className="phone-input"
      />
      {!isValidPhoneNumber && (
        <span className="error">
          Phone should be in +1 (xxx) xxx-xxxx format
        </span>
      )}
    </div>
  );
};

export default PhoneInput;
