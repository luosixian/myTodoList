import React, { Component } from 'react'
import Header from './components/Header' //index可省略
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '肝手游', done: false }
        ]
    }

    //用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj) => {
        // 1. 获取原todo
        const { todos } = this.state
        // 2. 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 3. 更新状态
        this.setState({ todos: newTodos })
    }

    //更新一个todo对象的checked
    updateTodo = (id, done) => {
        // 1. 获取原todo
        const { todos } = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {                    //
            if (todoObj.id === id) return { ...todoObj, done: done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    // 删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // 把所有check框全选
    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done: done }
        })
        this.setState({ todos: newTodos })
    }

    // 清除所有done的项目
    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header add={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
