import React, { Component } from "react";
import ToggleSwitch from "./toggle";

class App extends Component {
render() {
 return (
 <React.Fragment>
  <ToggleSwitch label="Notifications" />
  <ToggleSwitch label="Subscribe" />
 </React.Fragment>

 );
}
}
export default App;