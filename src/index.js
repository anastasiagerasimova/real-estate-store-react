import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

import {ApartmentsProvider} from './components/apartments-context'
import ApartmentsService from './services/apartments-service'
import ErrorBoundry from './components/error-boundry'
import App from './components/app'
import store from './store'

import './index.less'

const apartmentsService = new ApartmentsService()

ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundry>
            <ApartmentsProvider value={apartmentsService}>
                <HashRouter>
                    <App />
                </HashRouter>
            </ApartmentsProvider>
        </ErrorBoundry>
    </Provider>
), document.getElementById('root'))
