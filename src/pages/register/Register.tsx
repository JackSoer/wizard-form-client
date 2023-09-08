import './register.scss';
import Map from '../../components/map/Map';
import UserForm from '../../components/userForm/UserForm';

const Register = () => {
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
