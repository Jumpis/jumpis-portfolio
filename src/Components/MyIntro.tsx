import React from "react";
import '../index.css';

export default function MyIntro() {

  const style = {
    myintro: {
      height: '20vh',
    },
    text: {
      float: 'left' as 'left',
      fontFamily: 'GmarketSansTTFMedium',
      textAlign: 'center' as 'center',
      width: '20%',
      paddingTop: '55px',
      fontSize: '50px',
      fontWeight: 'bold' as 'bold',
    },
    introduceBox: {
      float: 'left' as 'left',
      fontFamily: 'GmarketSansTTFMedium',
      width: '80%',
    },
    introduceTitle: {
      fontSize: '30px',
      fontWeight: 'bold' as 'bold',
    },
    introduce: {
      fontSize: '20px',
    },
  }

  return (
    <div className="MyIntro" style={style.myintro}>
      <div style={style.text}>About Me</div>
      <div style={style.introduceBox}>
        <p style={style.introduceTitle}>스스로 성장하는 개발자</p>
        <p style={style.introduce}>그 어느 때보다 시대는 빠르게 변하고 기술은 발전하고 있습니다.<br/>
        현재의 실력에 만족하는 개발자는 도태될 수밖에 없습니다.<br/>
        자기 주도적으로 새로운 기술을 공부하고 적용하여 성장하는 개발자로 남고 싶습니다. </p>
      </div>

    </div>
  );
}