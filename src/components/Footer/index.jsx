import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }

    handleClearAllDone = () => {
        if (window.confirm('确定删除全部已完成项目吗')) { this.props.clearAllDone() }
    }

    render() {
        const { todos } = this.props
        const total = todos.length
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        return (
            <div className="todo-footer" >
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
