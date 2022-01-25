import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const BoardState = atom({
  key: "BoardState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
