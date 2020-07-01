import React from "react";
import { observer, inject } from "mobx-react";
import IntroductionImage from './Components/IntroductionImage';
import MyIntro from './Components/MyIntro';
import MyStacks from './Components/MyStacks';
import MyProjects from './Components/MyProjects';
import ContactMe from './Components/ContactMe';

@inject("yourstore")
@observer
export default class App extends React.Component<any> {
  render() {
    return (
      <div className="App" >
        <IntroductionImage />
        <MyIntro />
        <MyStacks />
        <MyProjects />
        <ContactMe />
      </div>
    );
  }
}