import "./App.css";
import React from "react";
import logo from 'C:/Users/itspr/demo/src/images/bridgelabzLogo.png';
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super();
    this.state = {
      title: 'Hello From Bridgelabz'
    }
    onclick = ($event) => {
      console.log('sace button clicked', $event)
      window.open(this.url , "_blank")

    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} onclick={this.onclick}
        alt='xyz'/>
        
      </div>
    );
  }
}
export default App;
