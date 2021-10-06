import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Client } from 'chomex';
import './Popup.css';

const Popup = () => {
  const bgClient = new Client(chrome.runtime);
  const [userName, setUsername] = React.useState("");

  const getUsername = async () => {
    // Gets username from background page
    const response = await bgClient.message("/users/get", { id: 123 });
    setUsername(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => getUsername()}>Get User From Service Worker</button>
        <p>{userName}</p>
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
