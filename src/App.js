//formatted like any other class based component

import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  //render method 

  //then inside the class we have a render method, which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.

  //creating javascript object and then array for todos
    state = {
      todos: [

        {
          id: 1,
          title: "put out the trash",
          completed: true
        },

        {
          id: 2,
          title: "dinner with wife",
          completed: true
        },

        {
          id: 3,
          title: "meeting with boss",
          completed: false
        }
      ]
    };

// markComplete =() => {
//   console.log("From App.js")
// }

//Grabbing id, which has been passed through from TodoItem to Todos and now App.js
markComplete =(id ) => {
  console.log(id)
}
render() {
 
  return (
    <div className="App">
      {/*taking todos that are in app component state and passing them down to todos component as prop (as todos component hasn't got prop or state). We add prop (property) same as a html attribute. We're taking the todos in our state and passing to todos component as a prop. We now need to figure out how to acces this in our todos component.*/}
      <Todos todos = {this.state.todos} markComplete={this.markComplete} />

    </div>
  );
}
}
export default App;
