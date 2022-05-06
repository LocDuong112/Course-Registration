import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {Component} from 'react'

class App extends Component {
  state = { greeting:''}

  componentDidMount() {
    axios.post('http://localhost:5000/login')
    .then(result=>this.setState({greeting: result.data.sayHi}))
  };

  render() {
    return (
      <table>
        <tr>
          <td>Username</td>
          <td><input type='text' name='username'></input></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type='password' name='password'></input></td>
        </tr>
        <tr>
          <td></td>
          <td><input type='submit' value='Login'></input></td>
        </tr>
      </table>
    )
  };

}

export default App;
