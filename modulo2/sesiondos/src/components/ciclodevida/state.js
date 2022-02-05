import React, {Component} from "react";

class ClockUsingClass extends Component {

  constructor(props) {
      super(props);

      this.state = {
          date: new Date(),
      }
  }

  render() {
    return (
      <div>la  hora es: {this.state.date.toLocaleTimeString()}</div>
    )
  }

  

  changeTime(){
      this.setState({ date : new Date() });
  }

  componentDidMount() {
    this.time = setInterval(() => {
        this.changeTime();
    }, 1000);
  }

  componentWillMount() {

  }

}

export default ClockUsingClass;