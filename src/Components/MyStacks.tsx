import React from 'react';
import JavascriptIcon from '../Images/Icons/javascriptIcon.png';
import ReactIcon from '../Images/Icons/react.png';
import ReduxIcon from '../Images/Icons/redux.jpg';
import TypescriptIcon from '../Images/Icons/typescript.jpeg';
import MaterialUIIcon from '../Images/Icons/materialui.png';
import JavaIcon from '../Images/Icons/java.png';
import SpringIcon from '../Images/Icons/spring.png';
import ExpressJSIcon from '../Images/Icons/expressjs.jpg';
import OracleDBIcon from '../Images/Icons/oracle.png';
import MysqlIcon from '../Images/Icons/mysql.png';
import SequelizeIcon from '../Images/Icons/sequelize.png';
import CIcon from '../Images/Icons/c.jpg';
import CplusplusIcon from '../Images/Icons/cplusplus.png';
import CshopIcon from '../Images/Icons/cshop.png';
import PythonIcon from '../Images/Icons/python.png';
import UnityIcon from '../Images/Icons/unity.png';
import GitIcon from '../Images/Icons/git.png';
import GithubIcon from '../Images/Icons/github.png';

export default function MyStacks() {
  const style = {
    mystacks: {
      backgroundColor: '#363e4a',
      height: '120vh',
      fontFamily: 'GmarketSansTTFMedium',
    },
    stacktitle: {
      fontSize: '30px',
      fontWeight: 'bold' as 'bold',
      textAlign: 'center' as 'center',
      textDecoration: 'underline' as 'underline',
      textUnderlinePosition: 'under' as 'under',
      color: '#ffffff',
      padding: '40px',
      marginTop: '20px',
    },
    icontable: {
      display: 'flex' as 'flex',
      justifyContent: 'center' as 'center',
      alignItems: 'center' as 'center',
    },
    icons: {
      float: 'left' as 'left',
      marginRight: '10px',
      marginLeft: '10px',
      width: '120px',
      height: '120px',
      overflow: 'hidden' as 'hidden',
    },
    icon: {
      width: 'auto' as 'auto',
      height: '120px',
    }
  };

  let iconSize = 80;

  return (
    <div className="MyStacks" style={style.mystacks}>
      <div style={style.stacktitle}>FRONT-END</div>
      <div style={style.icontable}>
        <div title='JAVASCRIPT' style={style.icons}>
          <img src={JavascriptIcon} style={style.icon} alt='JAVASCRIPT' />
        </div>
        <div title='REACT' style={style.icons}>
          <img src={ReactIcon} style={style.icon} alt='REACT' />
        </div>
        <div title='REDUX' style={style.icons}>
          <img src={ReduxIcon} style={style.icon} alt='REDUX' />
        </div>
        <div title='TYPESCRIPT' style={style.icons}>
          <img src={TypescriptIcon} style={style.icon} alt='TYPESCRIPT' />
        </div>
        <div title='MATERIAL-UI' style={style.icons}>
          <img src={MaterialUIIcon} style={style.icon} alt='MATERIAL-UI' />
        </div>
      </div>
      <div style={style.stacktitle}>BACK-END</div>
      <div style={style.icontable}>
        <div title='JAVA' style={style.icons}>
          <img src={JavaIcon} style={style.icon} alt='JAVA' />
        </div>
        <div title='SPRING' style={style.icons}>
          <img src={SpringIcon} style={style.icon} alt='SPRING' />
        </div>
        <div title='EXPRESSJS' style={style.icons}>
          <img src={ExpressJSIcon} style={style.icon} alt='EXPRESSJS' />
        </div>
        <div title='ORACLEDB' style={style.icons}>
          <img src={OracleDBIcon} style={style.icon} alt='ORACLEDB' />
        </div>
        <div title='MYSQL' style={style.icons}>
          <img src={MysqlIcon} style={style.icon} alt='MYSQL' />
        </div>
        <div title='SEQUELIZE' style={style.icons}>
          <img src={SequelizeIcon} style={style.icon} alt='SEQUELIZE' />
        </div>
      </div>
      <div style={style.stacktitle}>EXPERIENCED</div>
      <div style={style.icontable}>
        <div title='C' style={style.icons}>
          <img src={CIcon} style={style.icon} alt='C' />
        </div>
        <div title='C++' style={style.icons}>
          <img src={CplusplusIcon} style={style.icon} alt='C++' />
        </div>
        <div title='C#' style={style.icons}>
          <img src={CshopIcon} style={style.icon} alt='C#' />
        </div>
        <div title='PYTHON' style={style.icons}>
          <img src={PythonIcon} style={style.icon} alt='PYTHON' />
        </div>
        <div title='UNITY' style={style.icons}>
          <img src={UnityIcon} style={style.icon} alt='UNITY' />
        </div>
      </div>
      <div style={style.stacktitle}>VERSION CONTROL</div>
      <div style={style.icontable}>
        <div title='GIT' style={style.icons}>
          <img src={GitIcon} style={style.icon} alt='GIT' />
        </div>
        <div title='GITHUB' style={style.icons}>
          <img src={GithubIcon} style={style.icon} alt='GITHUB' />
        </div>
      </div>
    </div>
  );
};