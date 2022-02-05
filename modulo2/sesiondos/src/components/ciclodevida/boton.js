import React from "react";

class Contador extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          date: new Date(),
      }
  }

  render() {
    return (
      <div>
        <div>la hora es: {this.state.date.toLocaleTimeString()}</div>
        <button onClick={this.changeTime()}>Contador</button>
      </div>
    )
  }
  

  changeTime(){
      this.setState({ date : new Date() });
  }


}

export default Contador;