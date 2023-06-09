import { atom } from "recoil";

export const startTimeAtom = atom({
  key: "startTimeAtom",
  default: 22, // 기본값을 설정한다 (default는 = 기본값)
});
export const endTimeAtom = atom({
  key: "startTimeAtom",
  default: 8, // 기본값을 설정한다 (default는 = 기본값)
});

export const dateAtom = atom({
  key: "dateAtom",
  default: ["6/1", "6/2", "6/3", "6/4"], // 기본값을 설정한다 (default는 = 기본값)
});
