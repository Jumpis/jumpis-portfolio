import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

export default function ContactMe() {
  const style = {
    contactme: {
      backgroundColor: '#FFFFFF',
      height: '25vh',
      fontFamily: 'GmarketSansTTFMedium',
      position: 'relative' as 'relative',
    },
    contacttitle: {
      fontSize: '40px',
      fontWeight: 'bold' as 'bold',
      textAlign: 'center' as 'center',
      color: '#000000',
      marginTop: '20px',
      paddingTop: '20px',
    },
    contactemail: {
      fontSize: '30px',
      fontWeight: 'bold' as 'bold',
      textAlign: 'center' as 'center',
      color: '#000000',
      marginTop: '20px',
    },
    githublink: {
      textAlign: 'center' as 'center',
      marginTop: '20px',
    },
  };

  let [iconSize, setIconSize] = useState(80);
  const handleOnMouseOver = () => {
    setIconSize(iconSize + 10);
  };

  const handleOnMouseOut = () => {
    setIconSize(iconSize - 10);
  }

  return (
    <div className="MyStacks" style={style.contactme}>
      <div style={style.contacttitle}>CONTACT ME</div>
      <div style={style.contactemail}>Email : leejonghyeon0106@gmail.com</div>
      <div style={style.githublink}>
        <a href="https://github.com/Jumpis" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
          <AiOutlineGithub size={iconSize} color='#000000' />
        </a>
      </div>
    </div>
  );
};