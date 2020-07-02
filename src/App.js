//formatted like any other class based component

import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';

import './App.css';


class App extends Component {
  //render method 

  //then inside the class we have a render method which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.

  //creating javascript object and then array for todos
    state = {
      todos: [

        {
          id: 1,
          title: "put out the trash",
          completed: false
        },

        {
          id: 2,
          title: "dinner with wife",
          completed: false
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
// markComplete =(id ) => {
//   console.log(id)
// }

// think of as the state like it's a cloud of data that hovers above all the components and then we're just sending something up to change it and then it rains back down. So it's it's a one-way data flow 

//now idea is to set state for each particular id. We're looking at state as a whole, which is an object, and we want to change something in 'todos', so we basically match the id that's passed in here and if it matches, we want to update the completed value when it's checked, so we will use map
markComplete =(id ) => {
  //here we use an arrow function and if statement to check that the current todo we're iterating through has an id that is equal to the id passed into the function
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      //we're toggling here (toggle complete), so whatever the opposite is, we're setting it to. Toggline state at top and that state is being brought down through the props into components. State is like a cloud of data hovering above components and we're just sending something up to change it and then it reigns back down. It's a one-way data flow.

      //now we want to delete items, doing same thing but calling a method on a prop and then it comes back up to App.js, and get rid of that todo
      todo.completed = !todo.completed
    }
    return todo;
  })});
}
//Delete Todo
// delTodo = (id) => {
//   console.log(id)
// }

//Manipulating our state by removing one of the deleted todos, and we use filter method (high order array method, which loops through and based on a condition it will return another array). We only want to return todos that don't match the id passed in, because we want to get rid of that one

delTodo = (id) => {
  //passing in our state object (we're dealing with the todos. We basically everything that's already there and use spread operator for that, which is 3 dots. So we want to filter out the id that is not the id here - in other words it's going to filter out the id that we're deleting). So when we click on item to delete, it will delete it but will come back when we reload, as we're not persisting to a database (even jason placeholder doesn't delete it from database, it doesn't have a backend, as react is a frontend UI framework/library, which takes care of the delete)
  this.setState ({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}


render() {
 
  return (
    <div className="App">
      {/*taking todos that are in app component state and passing them down to todos component as prop (as todos component hasn't got prop or state). We add prop (property) same as a html attribute. We're taking the todos in our state and passing to todos component as a prop. We now need to figure out how to acces this in our todos component.*/}
      {/*doing same thing but no props as we're actually running it in App.js (going up - adding delTodo to App.js)*/}
      <div className="container">
        <Header />
        <Addtodo />
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>       
    </div>
  );
}
}
export default App;
