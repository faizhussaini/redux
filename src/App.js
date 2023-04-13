import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Store from './ReduxContainer/Store'
import BComponent from './ReduxContainer/BComponent';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <BComponent></BComponent>
    </div>
    </Provider>
  );
}

export default App;
