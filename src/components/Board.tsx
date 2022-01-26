import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Tr from "./board/Tr";
import Post from "./board/Post";
import Modal from "./board/Modal";
import { IBoard } from "../dto/Board";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { infoState } from "./Atoms";

const Board = () => {
  const setinfos = useSetRecoilState(infoState);
  const [info, setInfo] = useState<IBoard[]>([]);
  const [selected, setSelected] = useState<IBoard>();
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://jsonplaceholder.typicode.com/users");
  //     const json = await response.json();
  //     setinfos(json);
  //   })();
  // }, []);

  const infoList = useRecoilValue(infoState);
  console.log(infoList);
  const handleSave = (data: IBoard): void => {
    //데이터 수정하기(중요)
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id: number): void => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item: IBoard): void => {
    setModalOn(true);
    const selectedData: IBoard = {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
    console.log(selected);
  };

  const handleCancel = (): void => {
    setModalOn(false);
  };

  const handleEditSubmit = (item: IBoard): void => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">
        고객 정보 리스트
      </div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3">Id.</th>
            <th className="text-gray-300 px-4 py-3">Name</th>
            <th className="text-gray-300 px-4 py-3">UserName</th>
            <th className="text-gray-300 px-4 py-3">Email</th>
            <th className="text-gray-300 px-4 py-3">Phone No.</th>
            <th className="text-gray-300 px-4 py-3">Website</th>
            <th className="text-gray-300 px-4 py-3">Edit</th>
            <th className="text-gray-300 px-4 py-3">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Board;
