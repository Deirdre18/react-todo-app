//class based component

import React, { Component } from 'react'

export class Addtodo extends Component {
    //adding functionality. Here we have a an input field. Usually you're going to want to have your fields as a piece of State for that component, so we add a state value to our state object
    state = {
        title: ''
    }
    //this is an example of component state and only exists within Addtodo component (and we don't need to go back up to App.js). The Todos however are at app level state because we're sharing that between components and that's what you would use redux for or context or even something like Apollo with graph QL (different ways to manage app level state, but this here is at component level state)

    //this will give us the value of whatever we type in (so what we're doing is setting the title for whatever we type in.  We get the value using this event parameter). But what if we had other fields like name, email, password etc - we wouldn't want to do an onChange for each one, so this is what we do - so as long as name is equal to what's in the field (in this case title), that should be fine. We just have one field here but you can use as many fields as you want. 
    //onChange = (e) => {this.setState({ title: e.target.value })}
    onChange = (e) => {this.setState({ [e.target.name]: e.target.value })}


    render() {
        return (
            <form style = {{ display: 'flex' }}>
                <input 
                 type="text" 
                 name="title"
                 style = {{ flex: '10', padding: '5px' }} 
                 placeholder="Add todo ..." 
                 value = {this.state.title}
                 //doesn't matter what this is called, it is just the name of the method
                 onChange = {this.onChange}
                 />

                <input 
                 type = "submit"
                 value = "Submit" 
                 className = "btn"
                 style = {{flex: '1'}}    
                 />
            </form>
        )
    }
}

export default Addtodo
