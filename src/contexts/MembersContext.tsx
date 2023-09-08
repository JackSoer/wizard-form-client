import { createContext, ReactNode, useEffect, useState } from 'react';
import UserType from '../types/UserType.type';
import axios from '../api/users';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

type MembersInitStateType = {
  members: UserType[];
};

type MembersContextProviderType = {
  children: ReactNode;
};

const INIT_STATE: MembersInitStateType = { members: [] };

const MembersContext = createContext(INIT_STATE);

export const MembersContextProvider = ({
  children,
}: MembersContextProviderType) => {
  const { pathname } = useLocation();
  const [members, setMembers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('/users');

        setMembers(response?.data?.users);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log(err?.response?.data?.message);
        }

        console.log(err);
      }
    };

    fetchMembers();
  }, [pathname]);

  return (
    <MembersContext.Provider
      value={{
        members,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export default MembersContext;
