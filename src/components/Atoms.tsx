import { atom } from "recoil";
import { IBoard } from "../dto/Board";

export const infoState = atom<IBoard[]>({
  key: "data",
  default: [],
});
