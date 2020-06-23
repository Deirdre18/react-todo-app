import React, { Component } from 'react';
//TodoItem also has a prop of todo, so we import PropTypes
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}//PropTypes
  //we want to define any prop-types for this class

  //so name of class (Todos) and then it's going to be a single object of Prop, and is required. This is good practice to do
  TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
    }


export default TodoItem
