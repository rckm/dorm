import React, { Component } from "react";
import FormComponent from "../Form";
import BookingForm from "../BookingForm";

class App extends Component {
  state = {
    authorizedUser: null
  };

  setUser = authorizedUser => {
    this.setState({ authorizedUser });
  };

  render() {
    return (
      <div className="App">
        {this.state.authorizedUser ? (
          <BookingForm authorizedUser={this.state.authorizedUser} />
        ) : (
          <FormComponent setUser={this.setUser} />
        )}
      </div>
    );
  }
}

export default App;
