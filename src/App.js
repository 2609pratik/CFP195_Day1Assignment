import "./App.css";
import React from "react";
import logo from "C:/Users/itspr/demo/src/images/bridgelabzLogo.png";
class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      name: "",
      nameError:""
    };
  }
    onClick = ($event) => {
      console.log("save button clicked", $event);
      window.open(this.url, "_blank");
    };
    onNameChange = (event) => {
      console.log("value is ", event.target.value);
      const nameRegex = RegExp ("^[A-Z]{1}[a-z]{2,}$")
      this.setState({ name: event.target.value });
      if (nameRegex.test(event.target.value)) {
        this.setState({nameError:''})
      } else {
        this.setState({nameError:'Name is incorrect'})

      }
    };
  
  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.name} from bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
           alt="xyz" />
        </div>
        <div>
          <input onChange={this.onNameChange}/>
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </>
    );
  }
}
export default App;
