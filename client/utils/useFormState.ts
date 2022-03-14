import { ChangeEvent, useState } from "react";
import { IUser } from "./types";

const initState = {
  username: "",
  email: "",
  age: 0,
  country: "",
};

export const useFormState = (user?: IUser) => {
  const [formState, setFormState] = useState<Omit<IUser, "_id">>(
    user ?? initState
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const clearForm = () => {
    setFormState(initState);
  };

  return { formState, onChange, clearForm };
};
