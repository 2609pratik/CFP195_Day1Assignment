import "./App.css";
import React from "react";
import logo from 'C:/Users/itspr/demo/src/images/bridgelabzLogo.png';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Hello From Bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} 
        alt='xyz'/>
        
      </div>
    );
  }
}
export default App;
