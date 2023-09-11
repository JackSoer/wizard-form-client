const inputData = {
  firstPart: [
    {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      required: true,
      label: 'First Name',
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      required: true,
      label: 'Last Name',
    },
    {
      name: 'birthdate',
      type: 'date',
      id: 'birthdate',
      required: true,
    },
    {
      type: 'text',
      name: 'reportSubject',
      id: 'reportSubject',
      required: true,
      label: 'Report Subject',
    },
    {
      name: 'country',
      id: 'country',
      required: true,
      label: 'Country',
    },
    {
      name: 'phone',
    },
    {
      type: 'email',
      name: 'email',
      id: 'email',
      required: true,
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      label: 'Email',
      errorMsg: 'It should be a valid email address.',
    },
  ],
  secondPart: [
    {
      type: 'text',
      name: 'company',
      id: 'company',
      label: 'Company',
    },
    {
      type: 'text',
      name: 'position',
      id: 'position',
      label: 'Position',
    },
    {
      name: 'aboutMe',
      id: 'aboutMe',
      label: 'About me',
    },
    {
      name: 'photo',
      id: 'photo',
      label: 'Photo',
      accept: 'image/*',
    },
  ],
};

export default inputData;
