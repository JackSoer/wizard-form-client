type UserType = {
  firstName: string;
  lastName: string;
  birthdate: string;
  reportSubject: string;
  country: string;
  phone: string;
  email: string;
  company: string;
  position: string;
  aboutMe: string;
  photo: File | string;
  id?: string;
};

export default UserType;
