import React, { Component } from 'react';
//TodoItem also has a prop of todo, so we import PropTypes
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            //in JSX we can actually use inline style which allows us to have our markup our, our functionality and our styling all within our component, so lets add styling in <div> and we use double {} for inline styling. There is no hyphenatio in inline styling and camelCase is used
            <div style= {{ backgroundColor: '#9999ff' }}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}//PropTypes
  //we want to define any prop-types for this class

  //so name of class (Todos) and then a single object of Prop, and is required. This is good practice to do
  TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
    }


export default TodoItem
