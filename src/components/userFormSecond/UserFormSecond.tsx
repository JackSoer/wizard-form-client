import { ReactElement } from 'react';
import inputData from '../../data/inputData';
import UserType from '../../types/UserType.type';
import Input from '../input/Input';

type UserFormSecondProps = {
  user: UserType;
  onChange: (e: any) => void;
  updateUserFields: (newUserFields: Partial<UserType>) => void;
};

const UserFormSecond = ({
  user,
  updateUserFields,
  onChange,
}: UserFormSecondProps): ReactElement => {
  return (
    <>
      {inputData.secondPart.map((input) => (
        <Input
          onChange={onChange}
          value={user[input.name as keyof UserType]}
          {...input}
          key={input.id}
        />
      ))}
      <div className="box">
        <label htmlFor="aboutMe" className="user-form__label">
          About Me
        </label>
        <textarea
          name="aboutMe"
          id="aboutMe"
          className="user-form__textarea"
          value={user.aboutMe}
          onChange={(e) => updateUserFields({ aboutMe: e.target.value })}
        ></textarea>
      </div>
      <div className="box">
        <label htmlFor="photo" className="user-form__label">
          Photo
        </label>
        <input
          type="file"
          className="user-form__file"
          name="photo"
          accept="image/*"
          id="photo"
          onChange={(e) =>
            updateUserFields({
              photo: !e.target.files ? '' : e.target.files[0],
            })
          }
        />
      </div>
    </>
  );
};

export default UserFormSecond;
