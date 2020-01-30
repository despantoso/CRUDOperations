import React, { Component } from "react";
import logo from "./genericsports.jpg";
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    const Home = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <a
            className="App-link"
            href="https://www.forbes.com/athletes/#fa0cb0b55ae5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forbes Top 10 Paid Atheletes
          </a>
          <Link to="/Athletes">CLICK ME</Link>
        </header>
      </div>
    );
    return <Home />;
  }
}

export default Home;
