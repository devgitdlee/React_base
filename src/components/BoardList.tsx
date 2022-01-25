import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Board} from '../dto/Board';
import styled from "styled-components";
interface Iprops {
  xs : number;
  sm : number;
}
const Row = styled.ul``;
const Col = styled.li<Iprops>`
`;

const BoardList: React.FC = () => {
  const [boardList, setBoardList] = useState<Array<Board>>([]);
 

  useEffect(() => {
    getBoardList();
  }, []);
 
  const getBoardList = async () => {
    // res는 http response의 header + body를 모두 갖고 있다.
    const res  = await axios.get('http://jsonplaceholder.typicode.com/users');
    console.log(res);
    setBoardList(res.data);
  }
 
  return (
    <>
    {
      boardList.map((board: Board)=>
        <Row>
          <Col xs={8} sm={8}>{board.id}</Col>
          <Col xs={4} sm={4}>{board.name}</Col>
          <Col xs={4} sm={4}>{board.username}</Col>
          <Col xs={4} sm={4}>{board.phone}</Col>
          <Col xs={4} sm={4}>{board.website}</Col>
        </Row>)
    }
  </>
  );
};

export default BoardList;