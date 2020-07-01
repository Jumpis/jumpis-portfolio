import React from 'react';
import ProjectEntry from './ProjectEntry';
import ProjectDummy from '../ProjectDummy/ProjectDummy.json';

export default function MyProjects() {

  let dummydata = ProjectDummy;

  const style = {
    myprojects: {
      backgroundColor: '#c1c9d4',
      height: `${50 * dummydata.projects.length + 20}vh`,
    },
    myprojectitle: {
      fontFamily: 'GmarketSansTTFMedium',
      fontSize: '40px',
      fontWeight: 'bold' as 'bold',
      textAlign: 'center' as 'center',
      color: '#000000',
      padding: '40px',
    },
    projecttable: {
      display: 'flex' as 'flex',
      justifyContent: 'center' as 'center',
      alignItems: 'center' as 'center',
    },
  }

  return (
    <div className='myprojects' style={style.myprojects}>
      <div style={style.myprojectitle}>PROJECTS</div>
      <div style={style.projecttable}>
        {dummydata.projects.map(project => {
          return (
            <ProjectEntry project={project} />
          );
        })}
      </div>
    </div>
  );
};