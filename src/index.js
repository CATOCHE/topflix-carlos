import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App';
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/index.js'
import Search from './pages/search'
import Carlos from './pages/carlos'
import store from './store'
import { Provider } from 'react-redux'
import 'tachyons'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Carlos" component={Carlos} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
