import React from "react";
import { IBoard } from "../../dto/Board";
type TdProps = {
  item: IBoard;
  handleRemove: (id: number) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
  handleEdit: (Array: IBoard) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

const Td = ({ item, handleRemove, handleEdit }: TdProps) => {
  const onRemove = () => {
    handleRemove(item.id);
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <>
      <tr className='"bg-white border-2 border-gray-200'>
        <td className="px-4 py-3">{item.id}</td>
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.username}</td>
        <td className="px-4 py-3">{item.email}</td>
        <td className="px-4 py-3">{item.phone}</td>
        <td className="px-4 py-3">{item.website}</td>
        <td
          onClick={onEdit}
          className="text-center text-purple-400 cursor-pointer show-modal"
        >
          <i className="far fa-edit"></i>
        </td>
        <td
          onClick={onRemove}
          className="text-center text-purple-400 cursor-pointer"
        >
          <i className="far fa-trash-alt"></i>
        </td>
      </tr>
    </>
  );
};

export default Td;
