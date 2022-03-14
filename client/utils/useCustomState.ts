import { useState } from "react";
import { sortUsersUtils } from "./sort";
import { sortType, IStore, IUser } from "./types";

export const useCustomState = (store: IStore) => {
  const [state, setState] = useState<IStore>(store);
  const setSortType = (type: sortType) => {
    setState({
      ...state,
      users: sortUsersUtils(state.users, type),
      sortType: type,
    });
  };
  const addUserToList = (user: IUser) => {
    setState({
      ...state,
      users: [...state.users, user],
    });
  };
  const updateUserInList = (newUserDate: IUser) => {
    setState({
      ...state,
      users: [
        ...state.users.map((user) => {
          if (user._id == newUserDate._id) {
            return newUserDate;
          }
          return user;
        }),
      ],
    });
  };
  const removeUser = (removeUserData: IUser) => {
    setState({
      ...state,
      users: [...state.users.filter((user) => user._id !== removeUserData._id)],
    });
  };
  return { state, setSortType, addUserToList, updateUserInList, removeUser };
};
