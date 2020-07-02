// header is just a functional component because there's not going to be any state or anything, it's basically just markup and is the first time we're looking at a function based component (which is pretty easy)

// functional component is one return, which works like render does

import React from 'react'

function Header() {
    return (
        //will be some links for about page but won't do that just yet
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
        )
}

//exporting function

const headerStyle={

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
    
}

export default Header;