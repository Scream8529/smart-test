import React, { useState } from 'react';
import type { NextPage } from 'next';
import Main from '../components/main';
import styled from 'styled-components';
import { IStore } from '../utils/types';
import API from '../api';
import { useCustomState } from '../utils/useCustomState';
import Toast from '../components/toast';

const Wraper = styled.div`
  max-width: 1024px;
  margin:0 auto;
`;

export interface IToastContext {
  toast: {
    isOpen: boolean, message: string, color: string
  },
  openToast: (message: string, color?: string) => void,

}

export const ToastContext = React.createContext<IToastContext>({ toast: { isOpen: false, message: '', color: "green" }, openToast: (message: string) => { } });
export const StateContext = React.createContext<IStore | null>(null);

interface IHomeProps {
  state: IStore
}

const Home: NextPage<IHomeProps> = (props) => {
  const { state, setSortType, addUserToList, updateUserInList, removeUser } = useCustomState(props.state);

  const [toast, setToast] = useState({ isOpen: false, message: '', color: 'green' })
  const openToast = (message: string, color?: string) => {
    setToast({ isOpen: true, message, color: color || 'green' });
    setTimeout(() => {
      setToast({ ...toast, isOpen: false });
    }, 3000)
  };

  return (
    <ToastContext.Provider value={{ toast, openToast }}>
      <StateContext.Provider value={{ ...state, setSortType, addUserToList, updateUserInList, removeUser }}>
        <Wraper>
          <Main />
        </Wraper>
        <Toast />
      </StateContext.Provider>
    </ToastContext.Provider>
  )
};

export async function getServerSideProps() {
  const response = await API.getUsers();
  return {
    props: {
      state: {
        users: response.data.users,
        sortType: 'age'
      }
    },
  }
};
export default Home;
