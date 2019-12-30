import React, { Component } from 'react'

export class TodoList extends Component {
    render() {
        return (
            <div className="App">
                {
                    this.props.items.map((item) => {
                        return <li key={item.key}>{item.text}</li>
                    })
                }
            </div>
        )
    }
}

export default TodoList
