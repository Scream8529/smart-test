import { SyntheticEvent } from "react";
import { IUser } from "./types";

export const stopPropagation = (e: SyntheticEvent) => {
  e.stopPropagation();
};

export const userValidation = (user: Omit<IUser, "_id">) => {
  if (user.username.length < 3 || user.username.length > 20) {
    return "Имя пользователя должно быть не короче трех символов и не больше 20";
  }
  if (user.age <= 0) {
    return "Возраст не может быть равен или меньше нуля";
  }
  if (user.country.length <= 0) {
    return "Выберете страну";
  }
  if (user.email.length <= 0) {
    return "Введите свою электронную почту";
  }
  return true;
};
