import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
      {this.props.numberOfUsers}
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps =(state)=>{

  return {users: state.users, numberOfUsers: state.users.length}
}

export default connect(mapStateToProps)(Users)
