//formatted like any other class based component

import React, { Component } from 'react';

class Todos extends Component {
  //render method (JSX attribute) React.htmlATTRIBUTES<HTMLElement.className?:string

  //then inside the class we have a render method, which is a lifecycle method and it's the only one that's actually required because it's needed to actually render the component in the browser and that's going to return what's called JSX. This looks like HTML but it's actually JSX. It's basically an easier way to write javascript for output in the browser. You could actually write in pure JavaScript but you would never want to, as it would be 20 times as hard, so that's why they use JSX. You can use javascript within JSX and put it between curley braces.
  render() {

  return (
    <div>
      <h1>Todos</h1>
    </div>
  );
}
}
export default Todos;
