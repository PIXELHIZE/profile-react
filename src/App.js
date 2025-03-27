import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [a, b] = useState('남자 코트 추천', '여자 코드 추천');
  return (
    <div className="App">
      <div className="Profile-top">
        <h4>Profile</h4>
      </div>
      <div className="list">
        <h4>글제목1</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a} {b}</h4>
        <p>2월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
