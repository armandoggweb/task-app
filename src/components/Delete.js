import React from 'react';

class Delete extends React.Component{
  render(){
    return(
      <button id={this.props.id} onClick={this.props.onDeleteClick}>
        Delete
      </button>
    );
  }
}

export default Delete;