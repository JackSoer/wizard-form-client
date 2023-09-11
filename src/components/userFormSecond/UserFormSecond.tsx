import { ReactElement } from 'react';
import inputData from '../../data/inputData';
import UserType from '../../types/UserType.type';
import FileInput from '../fileInput/FileInput';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';

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
  const FileOnChange = (e: any) => {
    updateUserFields({
      photo: !e.target.files ? '' : e.target.files[0],
    });
  };

  return (
    <>
      {inputData.secondPart.map((input) => {
        if (input.name === 'aboutMe') {
          return (
            <Textarea
              {...input}
              onChange={onChange}
              key={input.id}
              value={user[input.name as keyof UserType]}
            />
          );
        } else if (input.name === 'photo') {
          return (
            <FileInput
              onChange={FileOnChange}
              allowedFileTypes={['jpg', 'png', 'svg', 'webp']}
              {...input}
              key={input.id}
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

export default UserFormSecond;
