import React from "react";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import ShopList from "./components/ShopList";
import Container from "react-bootstrap/Container";
import Header from "./components/common/Header";
import { FooterContainer } from "./components/common/Footer";
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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/board" element={<Board />} />
          <Route path="/Shop" element={<ShopList />} />
          <Route path="/add" element={<BoardRegister />} />
        </Routes>
      </BrowserRouter>
      <FooterContainer />
    </Container>
  );
}

export default App;
