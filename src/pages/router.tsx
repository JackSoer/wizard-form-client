import { createBrowserRouter } from 'react-router-dom';
import Members from './members/Members';
import Register from './register/Register';
import Share from './share/Share';
import { MembersContextProvider } from '../contexts/MembersContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: 'share',
    element: (
      <MembersContextProvider>
        <Share />
      </MembersContextProvider>
    ),
  },
  {
    path: 'all-members',
    element: (
      <MembersContextProvider>
        <Members />
      </MembersContextProvider>
    ),
  },
]);

export default router;
