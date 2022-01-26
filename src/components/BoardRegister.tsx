import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { IBoard } from "../dto/Board";

const BoardRegister: React.FC = (props: any) => {
  const [validated, setValidated] = useState(false);
  const [boardList, setBoardList] = useState<Array<IBoard>>([]);
  const nextId = useRef(11);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(false);
      return;
    }

    setValidated(true);
    // Form.Grou의 controlid는 control의 id를 생성 => form[id] => control 노드 로 접근
    console.log(form.titleInput.value);
    const board = {
      id: (nextId.current += 1),
      name: form.nameText.value,
      username: form.usernameText.value,
      email: form.emailText.value,
      phone: form.phoneText.value,
      website: form.websiteText.value,
    };
    addBoard(board);
  };

  const addBoard = async (board: IBoard) => {
    //const res = await axios.post("/api/board", board);

    //console.log(res);
    props.history.push("/");
  };

  return (
    <Form>
      {/* <Form.Group controlId="titleInput">
        <Form.Label>ID</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">이메일을 입력하세요!!</Form.Control.Feedback>
      </Form.Group> */}
      <Form.Group controlId="nameText">
        <Form.Label>이름</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          이름을 입력하세요!!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="usernameText">
        <Form.Label>유저명</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          유저명을 입력하세요!!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="emailText">
        <Form.Label>이메일</Form.Label>
        <Form.Control required type="email" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          이메일을 입력하세요!!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="phoneText">
        <Form.Label>전화번호</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          전화번호를 입력하세요!!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="websiteText">
        <Form.Label>웹사이트</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          웹사이트를 입력하세요!!
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};

export default BoardRegister;
