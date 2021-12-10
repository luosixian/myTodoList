import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    //对接受的props进行限制
    static propTypes = {
        add: PropTypes.func.isRequired
    }

    handleKeyUp = (e) => {
        const { keyCode, target } = e
        // 判断是否为回车
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return //return务必不能少
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        // 变相将数据传给了父亲
        this.props.add(todoObj)
        // 清空输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
