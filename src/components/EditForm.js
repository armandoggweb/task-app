import React from 'react';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: this.props.task};
  }
  handleChange(event){
    this.setChange({value: event.target.value});
  }
  render(){
    return(
      <form onSubmit={this.props.onEditSubmit}>
        <input type="hidden" name="id" value={this.props.id} />
        <input type="text" name="name" defaultValue={this.state.value}/>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default EditForm;