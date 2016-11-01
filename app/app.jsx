var React = require('react')
var ReactDOM = require('react-dom')
var { Provider } = require('react-redux')
var store = require('./redux/store')
var { initialState } = require('./initialState')
var { Route, Router, IndexRoute, hashHistory } = require('react-router')
import About from 'About'
import Settings from 'Settings' 
import AppContainer from 'AppContainer'
import TuningsContainer from 'TuningsContainer'
import ChordsContainer from 'ChordsContainer'
import ScalesContainer from 'ScalesContainer'

require('style!css!sass!applicationStyles')

var newStore = store.createStore( initialState )

ReactDOM.render(
  <Provider store={ newStore }>
    <Router history={ hashHistory }>
       <Route path="/" component={ AppContainer }>
         <Route path="tunings" component={ TuningsContainer }/>
         <Route path="chords" component={ ChordsContainer }/>
         <Route path="scales" component={ ScalesContainer }/>
         <Route path="about" component={ About }/>
         <Route path="settings" component={ Settings }/>
         <IndexRoute component={ TuningsContainer }/>
       </Route>
     </Router>
  </Provider>,
  document.getElementById("app")
);
