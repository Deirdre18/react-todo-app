//formatted like any other class based component

import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  //render method (JSX attribute) React.htmlATTRIBUTES<HTMLElement.className?:string

  //then inside the class we have a render method, which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.
  render() {

    // next thing we want to do since we have this array of to do's we need to loop through them and then output something, so in react what we do is we use the map method, which is a high order array. and it's used it's used for a lot of different things but basically it can return an array from an array but we're,but we're just using it to loop through and then outputting JSX

    // we get hello three times and the reason we're seeing hello three times is because they are coming from the state (App.js), passed in as props and we're mapping through those props and then we're outputting to-do item which only has < Hello /> inside of it (TodoItem), so obviously hello is not what we want to display here.

    // remember this is a prop and todo is being passed into TodoItem as a prop

    return this.props.todos.map((todo) => (
      < TodoItem todo={todo}/>
    ));

    }
  }
  export default Todos;
