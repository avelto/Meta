import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import About from './pages/About'

class Root extends Component {
    render() {
        console.log( '[Root]', window.location.pathname );

        return <div>
            { this.props.children }
        </div>
    }
}

import Paper from 'material-ui/lib/paper'
import Menu from 'material-ui/lib/menus/menu';
import { MenuItems } from './containers/Navigation';

class Index extends Component {
    render() {
        console.log( '[Index]', window.location.pathname );
        const ACTIVE = { color: 'red' };

        return <div style={ { textAlign: 'center' } }>

            <Paper style={ {  width: '224px', margin: '200px auto' } } zDepth={ 1 }>
                <Menu style={ {} }>
                    <MenuItems />
                </Menu>
            </Paper>

        </div>
    }
}

export default class App extends Component {
    render() {
        console.log( '[Meta] render' );
        return (
            <Router history={ browserHistory }>
                <Route path='/' component={ Root }>
                    <IndexRoute component={ Index }/>

                    <Route path='about' component={ About }/>
                    {/*<Route path='*' component={ Meta }/>*/}

                </Route>
            </Router>
        );
    }
}