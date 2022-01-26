import React from "react";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardRegister from "./components/BoardRegister";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <Container className="p-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/board" element={<Board />} />
          <Route path="/add" element={<BoardRegister />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
