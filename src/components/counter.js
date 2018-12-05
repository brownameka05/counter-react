import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 })

  };


  render () {
    return (
    <div>
    {this.props.children}
      <span style={ { fontSize: 30 } } className={this.getBadgeClasses()}> {this.formatCount()}</span>
      <button onClick={this.handleAdd} className="btn btn-secondary btn-sm"> ADD </button>
      <button onClick={this.props.OnDelete} className="btn btn-danger btn-sm m-2"> Delete </button>
    </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += (this.state.count == 0) ? "warning" : "primary";
    return classes;

  }

  formatCount(){
    const {count} = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
