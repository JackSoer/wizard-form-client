const inputData = {
  firstPart: [
    {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      required: true,
      pattern: '^(?:[A-Za-z0-9 ]{2,20})$',
      label: 'First Name',
      errorMsg:
        "First name should be 2-20 characters and shouldn't include any special character.",
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      required: true,
      pattern: '^(?:[A-Za-z0-9 ]{2,20})$',
      label: 'Last Name',
      errorMsg:
        "Last name should be 2-20 characters and shouldn't include any special character.",
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
      pattern: '^(?:[A-Za-z0-9 ]{2,50})$',
      label: 'Report Subject',
      errorMsg:
        "Report subject should be 2-50 characters and shouldn't include any special character.",
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
      pattern: '^[A-Za-z0-9]{0,30}',
      errorMsg:
        "Company should be 0-30 characters and shouldn't include any special character.",
    },
    {
      type: 'text',
      name: 'position',
      id: 'position',
      label: 'Position',
      pattern: '^[A-Za-z0-9]{0,30}',
      errorMsg:
        "Position should be 0-30 characters and shouldn't include any special character.",
    },
  ],
};

export default inputData;
