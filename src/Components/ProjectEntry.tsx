import React from 'react';

type Project = {
  image: string,
  projectTitle: string,
  projectTitleDsc: string,
  position: string,
  link: string,
  date: string,
  decription: Array<String>
};

interface IProps {
  project: Project
}

export default function ProjectEntry({ project }: IProps) {

  const style = {
    projectentry: {
      width: '80vw',
      height: '40vh',
      padding: '40px',
      border: 'thick double #000000',
    },
    text: {
      float: 'left' as 'left',
      fontFamily: 'GmarketSansTTFMedium',
      textAlign: 'center' as 'center',
      width: '20%',
      paddingTop: '100px',
      fontSize: '50px',
      fontWeight: 'bold' as 'bold',
    },
    introduceBox: {
      paddingTop: '50px',
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
    <div className="projectentry" style={style.projectentry}>
      <div>{project.image}</div>
      <div>
        <div>{project.date}</div>
        <div>{project.decription.map(val => (<p>• {val}<br/></p>))}</div>
      </div>
    </div>
  );
};