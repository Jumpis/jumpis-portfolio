import React, { useState } from "react";
import { Parallax } from 'react-parallax';
import MacBookWallPaper from '../Images/macbookwallpaper.jpg';
import { AiOutlineGithub } from 'react-icons/ai';
import '../index.css';

export default function IntroductionImage() {

  const style = {
    image: {
      height: '100vh',
      width: '100%',
    },
    text: {
      left: '50%',
      top: '50%',
      position: 'absolute' as 'absolute',
      color: '#fff',
      fontFamily: 'GmarketSansTTFMedium',
      fontSize: 100,
      transform: 'translate(-50%, -50%)',
    },
    name: {
      left: '70%',
      top: '80%',
      position: 'absolute' as 'absolute',
      color: '#fff',
      fontFamily: 'GmarketSansTTFMedium',
      fontSize: 30,
      transform: 'translate(-50%, -50%)',
    },
    githubIcon: {
      left: '94%',
      top: '8%',
      position: 'absolute' as 'absolute',
      transform: 'translate(-50%, -50%)',
    }
  };

  let [iconSize, setIconSize] = useState(80);

  const handleOnMouseOver = () => {
    setIconSize(iconSize + 10);
  };

  const handleOnMouseOut = () => {
    setIconSize(iconSize - 10);
  }

  return (
    <div className="IntroductionImage">
      <div></div>
      <Parallax bgImage={MacBookWallPaper} strength={700}>
        <div style={style.image}>
          <a href="https://github.com/Jumpis" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}><AiOutlineGithub style={style.githubIcon} size={iconSize} color='#fff' /></a>
          <div style={style.text}>Hi! I am Jumpis!</div>
          <div style={style.name}>개발자 이종현의 포트폴리오</div>
        </div>
      </Parallax>
    </div>
  );
}