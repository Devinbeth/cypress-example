import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ username: '', password: '' })
    alert('You logged in!');
  }
  render() {
    return (
      <div className="App">
        <h1>Cypress Test</h1>
        Username: <input id='username' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
        <br />
        Password : <input id='password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type='password' />
        <br />
        <button onClick={() => this.handleClick()}>Login</button>
      </div>
    );
  }
}

export default App;
