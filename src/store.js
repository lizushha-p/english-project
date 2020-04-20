import { combineReducers } from 'redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import {history} from './history'


const rootReducer = (history) => combineReducers({
  router: connectRouter(history)
})

const middleWares = [
  routerMiddleware(history),
  thunk
]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(...middleWares),
      // other store enhancers if any
    );

export const store = createStore(rootReducer(history), enhancer);