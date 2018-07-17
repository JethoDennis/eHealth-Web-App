import { createStore } from 'redux'
import React from 'react'
import Director from '../Director'

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action)

  switch (action.type) {
    case 'MEDLY':
    return Object.assign({}, state, { count: state.page = 'Medly'})
    case 'NED':
    return Object.assign({}, state, { count: state.page = 'Ned'})
    case 'BANT':
    return Object.assign({}, state, { count: state.page = 'Bant'})
    case 'BREATHEAGAIN':
    return Object.assign({}, state, { count: state.page = 'Breathe Again'})
    case 'ICANCOPE':
    return Object.assign({}, state, { count: state.page = 'ICanCope'})
    default:
    return state
  }
}

const store = createStore(reducer);

export default store
