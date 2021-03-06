import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory, applyRouterMiddleware} from 'react-router'
import Routes from './routes'
import Relay from 'react-relay'
import useRelay from 'react-router-relay'
import {
    RelayNetworkLayer,
    urlMiddleware
} from 'react-relay-network-layer'
import {relayApi} from './config/endpoints'
import auth from './utils/auth'

const createHeader = () => {
    let idToken = auth.getToken()
    if (idToken) {
        return {
            Authorization: `Bearer ${idToken}`
        }

    } else {
        return {}
    }
}

Relay.injectNetworkLayer(
    new RelayNetworkLayer([
        urlMiddleware({
            url: (req) => relayApi,
        }),
        next => req => {
            req.headers = {
                ...req.headers,
                ...createHeader()
            }
            return next(req)
        },
    ],{disabledBatchQuery: true} )
)

ReactDOM.render(
    <Router
        environment={Relay.Store}
        render={applyRouterMiddleware(useRelay)}
        history={browserHistory}
        routes={Routes}
    />,
    document.getElementById('root')
)