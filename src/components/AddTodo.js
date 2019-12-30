import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div className="add-todo">
                <h2>Todo</h2>
                <button onClick={this.props.handleClick}>Add</button>
                {
                    this.props.addItem && (
                        <form onSubmit={this.props.handleSubmit}>
                            <input type="text" value={this.props.currentItem.text} onChange={this.props.handleInput} />
                        </form>
                    )
                }
            </div>
        )
    }
}

export default AddTodo
