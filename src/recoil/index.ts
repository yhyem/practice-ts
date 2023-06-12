import { atom } from "recoil";

export const timeAtom = atom<string[]>({
  key: "startTimeAtom",
  default: [], // 기본값을 설정한다 (default는 = 기본값)
});

export const dateAtom = atom<string[]>({
  key: "dateAtom",
  default: ["6/1", "6/2", "6/3", "6/4"], // 기본값을 설정한다 (default는 = 기본값)
});
