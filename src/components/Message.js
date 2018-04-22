// Message.js
import React, {Component} from 'react';
var deleteBtnStyle = {
  float:"right"
}
class Message extends Component {
  constructor(props){
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(e){
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();
  }
  render(){
    return (
      <span>
        {this.props.message} <i class="fas fa-times" onClick={this.onClickDelete}></i>
     </span>
    )
  }
}
export default Message