import React from "react";
import Counter from "./Counter";

function onClick() {
  alert("로그인 되었습니다!");
}

function App() {
  return (
    <>
      <button onClick={onClick}>로그인</button>
      <Counter />
    </>
  );
}

export default App;
