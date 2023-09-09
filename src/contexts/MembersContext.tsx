import { createContext, ReactNode, useEffect, useState } from 'react';
import UserType from '../types/UserType.type';
import axios from '../api/users';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

type MembersInitStateType = {
  members: UserType[];
  isLoading: boolean;
  fetchError: string;
};

type MembersContextProviderType = {
  children: ReactNode;
};

const INIT_STATE: MembersInitStateType = {
  members: [],
  isLoading: false,
  fetchError: '',
};

const MembersContext = createContext(INIT_STATE);

export const MembersContextProvider = ({
  children,
}: MembersContextProviderType) => {
  const { pathname } = useLocation();

  const [members, setMembers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get('/users');

        setMembers(response?.data?.users);

        setFetchError('');
      } catch (err: any) {
        if (err instanceof AxiosError) {
          setFetchError(err.message);
        }

        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [pathname]);

  return (
    <MembersContext.Provider
      value={{
        members,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export default MembersContext;
