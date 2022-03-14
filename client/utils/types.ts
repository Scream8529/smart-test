export interface IUser {
  _id: string;
  username: string;
  email: string;
  age: number;
  country: string;
}
export interface IStore {
  users: IUser[];
  sortType: sortType;
  setSortType: (string: sortType) => void;
  addUserToList: (user: IUser) => void;
  updateUserInList: (user: IUser) => void;
  removeUser: (user: IUser) => void;
}

export interface IAddUserPopupProps {
  isOpen: boolean;
  closePopup: () => void;
  addUserToList?: (user: IUser) => void;
}

export interface IEditUserPopupProps {
  isOpen: boolean;
  closePopup: () => void;
  user: IUser;
  updateUserInList?: (user: IUser) => void;
}

export type sortType = "username" | "email" | "country" | "age";
