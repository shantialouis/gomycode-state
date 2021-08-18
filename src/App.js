

import './App.css';
import React from 'react';
import myImage from './imageInSrc.PNG';

class App extends React.Component {
  state = {
    Person: {
      fullName : "Shalewa Tiamiyu",
      bio : "I just love coding!",
      imgSrc : myImage,
      profession : "Software Developer"
   },
    show : true,
    counter : 0
  };
handleShowPerson = () => {
  this.setState({
    show: !this.state.show
  });
}
compoundDidMount() {
  setInterval(() => {
    this.setState({counter: this.state.counter + 1})
  }, 1000)
}
render() {
  return (
    <div className = "app">
      {this.state.show && (
        <>
        <h1>Full Name : {this.state.Person.fullName}</h1>
        <h1>My Bio : {this.state.Person.bio}</h1>
        <h1>My Profession : {this.state.Person.profession}</h1>
        <img src = {this.state.Person.imgSrc} alt = "anime" height = "460"></img>
        <br></br>
        </>
      )}
      <button onClick={this.handleShowPerson}>CLICK ME</button>
      <p>{this.state.counter}</p>
    </div>
  );
}
}
export default App;