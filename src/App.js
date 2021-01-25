import React from 'react';
import Overview from './components/Overview';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', tasks: [], delete: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete =this.handleDelete.bind(this);
    this.handleEditSubmit =this.handleEditSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    let temp = this.state.tasks;
    temp.push(this.state.value);
    this.setState({tasks: temp, value: ''});
    event.preventDefault();
  }
  handleDelete(event){
    const index = parseInt(event.target.id);
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({tasks: tasks})
  }

  handleEditSubmit(event){
    const index = parseInt(event.target.elements.id.value);
    const name = event.target.elements.name.value;
    let tasks = this.state.tasks;
    tasks.splice(index, 1, name);
    this.setState({tasks: tasks});
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Introduce a new task: </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" name="Submit"/>
        </form>
        <Overview tasks={this.state.tasks} handlers={{remove: this.handleDelete, onEditSubmit: this.handleEditSubmit}} />
      </div>
    );
  }
}

export default App;
