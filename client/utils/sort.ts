import { IUser, sortType } from "./types";

export function sortUsersUtils(array: IUser[], sortType: sortType) {
  if (sortType == "age") {
    let newAr: IUser[];
    newAr = array.sort(function (a, b) {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    return newAr;
  }

  let mapped = array.map((user, index) => {
    return { index: index, value: user[sortType].toLowerCase() };
  });

  mapped.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  // контейнер для результа
  return mapped.map(function (el) {
    return array[el.index];
  });
}
