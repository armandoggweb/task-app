import React from 'react';

class Edit extends React.Component{
  render(){
    return(
      <button id={this.props.id} onClick={this.props.onEditClick}>
        Edit
      </button>
    );
  }
}

export default Edit;