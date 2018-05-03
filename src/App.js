// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
import styles from './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "your-api-key",
      authDomain: "your-domain",
      databaseURL: "your-database-url",
      projectId: "your-project-id",
      storageBucket: "your-storageBucket",
      messagingSenderId: "xxxxx"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <div className="columns MessageList-box">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
   }
}
export default App;
