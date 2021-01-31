import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './home'
import TodoEditable from './todolist-editable/todo_editable'
import TodoModular from './todolist-modular/indexm'
import TodoSimple from './todolist-simple/todo_simple'
import TodoContext from './todolist-contextApi/index'
import TodoModularFetch from './todolist-fetch/indexmf'
import injectContext from './store/appContex'

const Layout = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/todolist-simple/todo_simple'>
                < TodoSimple />
            </Route>
            <Route path='/todolist-editable/todo_editable'>
                < TodoEditable />
            </Route>
            <Route path='/todolist-modular'>
                <TodoModular />
            </Route>
            <Route path='/todolist-contextApi'>
                <TodoContext />
            </Route>
            <Route path='/todolist-fetch'>
                <TodoModularFetch />
            </Route>
        </Switch>
    )
}

export default injectContext(Layout)