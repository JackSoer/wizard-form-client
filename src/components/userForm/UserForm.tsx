import { FormEvent, useState, useEffect, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import useMultiform from '../../hooks/useMultiform';
import UserType from '../../types/UserType.type';
import UserFormFirst from '../userFormFirst/UserFormFirst';
import UserFormSecond from '../userFormSecond/UserFormSecond';
import './userForm.scss';
import axios from '../../api/users';
import { AxiosError } from 'axios';

const INITIAL_STATE: UserType = {
  firstName: '',
  lastName: '',
  birthdate: '',
  reportSubject: '',
  country: '',
  phone: '',
  email: '',
  company: '',
  position: '',
  aboutMe: '',
  photo: '',
};

const UserForm = (): ReactElement => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>(
    JSON.parse(localStorage.getItem('user') as string) || INITIAL_STATE
  );
  const [errors, setErrors] = useState([]);

  const updateUserFields = (userNewFields: Partial<UserType>) => {
    setUser((userPrev) => {
      return { ...userPrev, ...userNewFields };
    });
  };

  const onChange = (e: any) => {
    updateUserFields({ [e.target.name]: e.target.value });
  };

  const { steps, step, next, currentStep, isLastStep } = useMultiform([
    <UserFormFirst
      user={user}
      onChange={onChange}
      updateUserFields={updateUserFields}
    />,
    <UserFormSecond
      user={user}
      onChange={onChange}
      updateUserFields={updateUserFields}
    />,
  ]);

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentStep');
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in user) {
      formData.append(key, user[key as keyof UserType] as string | File);
    }

    if (!isLastStep()) {
      try {
        const response = await axios.post('/users', formData);

        localStorage.setItem('userId', JSON.stringify(response.data?.userId));

        setErrors([]);

        next();
      } catch (err) {
        console.log(err);

        if (err instanceof AxiosError) {
          setErrors(err?.response?.data?.errors || [err.message]);
        }
      }
    } else {
      try {
        const userId = JSON.parse(localStorage.getItem('userId') || '-1');
        await axios.post(`/users/${userId}`, formData);

        setErrors([]);

        clearLocalStorage();

        navigate('/share');
      } catch (err) {
        console.log(err);

        if (err instanceof AxiosError) {
          setErrors(err?.response?.data?.errors || [err.message]);
        }
      }
    }
  };

  useEffect(() => {
    if (isLastStep()) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          birthdate: user.birthdate,
          reportSubject: user.reportSubject,
          country: user.country,
          phone: user.phone,
          email: user.email,
          company: '',
          position: '',
          aboutMe: '',
          photo: '',
        })
      );
    } else {
      localStorage.removeItem('user');
    }
  }, [currentStep]);

  return (
    <div className="user-form">
      <h1 className="user-form__title">
        To participate in the conference, please fill out the form
      </h1>
      <form className="user-form__item" onSubmit={onSubmit}>
        <div className="user-form__current-step">
          {currentStep + 1} / {steps.length}
        </div>
        {errors &&
          errors.map((error) => (
            <p className="user-form__error" key={error}>
              {error}
            </p>
          ))}
        {step}
        <div className="user-form__btns">
          <button className="user-form__btn">
            {isLastStep() ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
