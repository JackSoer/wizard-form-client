import './register.scss';
import Map from '../../components/map/Map';
import UserForm from '../../components/userForm/UserForm';
import { ReactElement } from 'react';

const Register = (): ReactElement => {
  return (
    <>
      <Map />

      <div className="container">
        <div className="home">
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default Register;
