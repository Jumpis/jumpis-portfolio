import React from "react";
import { observer, inject } from "mobx-react";
import IntroductionImage from './Components/IntroductionImage';
import MyIntro from './Components/MyIntro';

@inject("yourstore")
@observer
export default class App extends React.Component<any> {
  render() {
    return (
      <div className="App" >
        <IntroductionImage />
        <MyIntro />
      </div>
    );
  }
}