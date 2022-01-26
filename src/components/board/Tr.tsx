import React from "react";
import Td from "./Td";
import { IBoard } from "../../dto/Board";
import { useRecoilState, useRecoilValue } from "recoil";

type TrProps = {
  info: Array<IBoard>;
  handleRemove: (id: number) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
  handleEdit: (Array: IBoard) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

const Tr = ({ info, handleRemove, handleEdit }: TrProps) => {
  return (
    <tbody>
      {info.map((item: IBoard) => {
        return (
          <Td
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  );
};

export default Tr;
