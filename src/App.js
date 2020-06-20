//formatted like any other class based component

import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  //render method (JSX attribute) React.htmlATTRIBUTES<HTMLElement.className?:string

  //then inside the class we have a render method, which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.
    state = {
      todos: [

        {
          id: 1,
          title: "put out the trash",
          completed: "false"
        },

        {
          id: 2,
          title: "dinner with wife",
          completed: "false"
        },

        {
          id: 3,
          title: "meeting with boss",
          completed: "true"
        }

      ]
    }
render() {
  console.log(this.state.todos)
  return (
    <div className="App">
      <Todos/>
    </div>
  );
}
}
export default App;
