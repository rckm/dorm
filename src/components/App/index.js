import React, { Component } from "react";
import Form from "../Form";
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
          <BookingForm />
        ) : (
          <Form setUser={this.setUser} />
        )}
      </div>
    );
  }
}

export default App;
