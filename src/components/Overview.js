import React from 'react';
import Delete from './Delete';
import Edit from './Edit';
import EditForm from './EditForm';

class Overview extends React.Component{
  constructor(props){
    super(props);
    this.handleEditClick =this.handleEditClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {id: ''};
  }

  handleEditClick(event){
    this.setState({id: event.target.id});
  }
  resetState(event){
    this.setState({id: ''});
    event.preventDefault();
  }
  render(){
    return (
      <ul>
        { 
          this.props.tasks.map((task,index) => {
            const id = index.toString();
            if(this.state.id === id){
              return (
                <li key={id} onSubmit={this.resetState}>
                  <EditForm task={task} id={id} onEditSubmit={this.props.handlers.onEditSubmit}/>
                </li>
              )
            }else{
              return (
                <li key={id}>
                  {id} : {task} 
                  <Edit id={id} onEditClick={this.handleEditClick}/>
                  <Delete id={id} onDeleteClick={this.props.handlers.remove}/>
                </li>
              ) 
            }
          }) 

        } 
      </ul>
    )
  }
}

export default Overview;