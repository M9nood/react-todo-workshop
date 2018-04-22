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
      apiKey: "AIzaSyBt1QrV_9Bj_h9guyWFo_VTgjyEFk7ww-g",
      authDomain: "react-todo-workshop.firebaseapp.com",
      databaseURL: "https://react-todo-workshop.firebaseio.com",
      projectId: "react-todo-workshop",
      storageBucket: "react-todo-workshop.appspot.com",
      messagingSenderId: "925454600908"
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