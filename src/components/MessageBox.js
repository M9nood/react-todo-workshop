// MessageBox.js
import React, {Component} from 'react';
import trim from 'trim';

class MessageBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
    this.setState({
      message: e.target.value
    });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }
  handleClick(e) {
    if(trim(this.state.message) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(this.state.message)
      });
      this.setState({
        message: ''
      });
    }
  }
render() {
  return (
    <div>
      <div className="field is-horizontal">
        
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input is-primary is-rounded"
                type="text"
                onChange={this.onChange}
                onKeyUp={this.onKeyup}
                value={this.state.message}
              />
            </p>
          </div>
        </div>
        <div className="sendbtn">
        <a className="button is-primary" onClick={this.handleClick}><i className="fab fa-telegram-plane"></i></a>
        </div>
      </div>
      </div>
    )
  }
}
export default MessageBox