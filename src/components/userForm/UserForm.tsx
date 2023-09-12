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
  const [nextWasClicked, setNextWasClicked] = useState(0);

  const updateUserFields = (userNewFields: Partial<UserType>) => {
    setUser((userPrev) => {
      return { ...userPrev, ...userNewFields };
    });
  };

  const onChange = (e: any) => {
    const valueWithoutLeadingSpaces = e.target.value.replace(/^\s+/, '');
    updateUserFields({ [e.target.name]: valueWithoutLeadingSpaces });
  };

  const { steps, step, next, prev, currentStep, isLastStep, isFirstStep } =
    useMultiform([
      <UserFormFirst
        user={user}
        onChange={onChange}
        updateUserFields={updateUserFields}
        errors={errors}
        nextWasClicked={nextWasClicked}
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

  const saveUser = () => {
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
  };

  const getFormData = (): FormData => {
    const formData = new FormData();

    if (isFirstStep()) {
      for (const key in user) {
        if (key === 'company') {
          break;
        }

        formData.append(key, user[key as keyof UserType] as string | File);
      }
    } else {
      for (const key in user) {
        formData.append(key, user[key as keyof UserType] as string | File);
      }
    }

    return formData;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = getFormData();

    const userId: string = localStorage.getItem('userId') || '';

    if (!userId) {
      try {
        const response = await axios.post('/users', formData);

        localStorage.setItem('userId', response.data?.userId);

        setErrors([]);

        setNextWasClicked((prev) => prev + 1);
      } catch (err) {
        console.log(err);

        if (err instanceof AxiosError) {
          setErrors(err?.response?.data?.errors || [err.message]);
        }

        setNextWasClicked((prev) => prev + 1);

        return;
      }
    } else {
      try {
        await axios.post(`/users/${userId}`, formData);

        setErrors([]);

        setNextWasClicked((prev) => prev + 1);
      } catch (err) {
        console.log(err);

        if (err instanceof AxiosError) {
          setErrors(err?.response?.data?.errors || [err.message]);
        }

        setNextWasClicked((prev) => prev + 1);

        return;
      }
    }

    if (isLastStep()) {
      clearLocalStorage();

      navigate('/share');
    } else {
      saveUser();

      next();
    }
  };

  useEffect(() => {
    if (isFirstStep()) {
      localStorage.removeItem('user');
    } else {
      saveUser();
    }
  }, [currentStep]);

  useEffect(() => {
    if (isFirstStep()) {
      localStorage.removeItem('userId');
    }
  }, []);

  return (
    <div className="user-form">
      <h1 className="user-form__title">
        To participate in the conference, please fill out the form
      </h1>
      <form className="user-form__item" onSubmit={onSubmit}>
        <div className="user-form__current-step">
          {currentStep + 1} / {steps.length}
        </div>
        {step}
        <div className="user-form__btns">
          {!isFirstStep() && (
            <button className="user-form__btn" onClick={prev}>
              Back
            </button>
          )}
          <button className="user-form__btn">
            {isLastStep() ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
