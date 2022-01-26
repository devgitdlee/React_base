import React, { useState, useEffect } from "react";
import axios from "axios";
import { IBoard } from "../dto/Board";
//import styled from "styled-components";
import "./scss/BoardList.scss";
import { Button, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
// import { BoardState } from "./Atoms";
// interface Iprops {
//   xs : number;
//   sm : number;
// }
// const Row = styled.ul``;
// const Col = styled.li<Iprops>`
// `;

// state type 선언
// interface Istate {
//   counter: number;
// }

const BoardList: React.FC = (props: any) => {
  // const [state, setState] = useState<Istate>({
  //   counter: 0,
  // });
  //const [boardList, setBoardList] = useState<Array<Board>>([]);

  //useQuery hook은 fetcher 함수를 부름 -> fetcher 함수가 loading중이라면 rect query는 isLoading에서 알려줌
  /* const { isLoading, data } = useQuery<Board[]>("boardList", getdata); */
  const [boardList, setBoardList] = useState<IBoard[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (loading === true) {
        const response = await fetch(
          "http://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setBoardList(json.slice(0, 100));
        console.log(json);
        setLoading(false);
      } else {
        // atoms 가져온 데이터
        //setBoardList(json.slice(0, 100));
      }
    })();
  }, []);

  // const getBoardList = async () =>
  //   // res는 http response의 header + body를 모두 갖고 있다.
  //   const res = await axios.get("http://jsonplaceholder.typicode.com/users");
  //   console.log(res);
  //   if (state.counter === 0) {
  //     setBoardList(res.data);
  //     setState({
  //       counter: state.counter + 1,
  //     });
  //   }
  // };

  return (
    <>
      <Row className="mb-3 justify-content-end">
        <Col xs="auto" sm="auto">
          <Button variant="primary" onClick={() => props.history.push("/add")}>
            등 록
          </Button>
        </Col>
      </Row>
      {boardList.map((board: IBoard) => (
        <Row className="py-2 board">
          <Col xs={4} sm={4}>
            {board.id}
          </Col>
          <Col xs={4} sm={4}>
            {board.name}
          </Col>
          <Col xs={4} sm={4}>
            {board.username}
          </Col>
          <Col xs={4} sm={4}>
            {board.phone}
          </Col>
          <Col xs={4} sm={8}>
            {board.website}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default BoardList;
