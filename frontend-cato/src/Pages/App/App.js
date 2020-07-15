import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configStore from './../../Config/store';
import Login from '../Login';


function App() {
  const store = configStore();
  return (
    <Provider store={store}>
      <Login></Login>
  
    </Provider>
  );
}

export default App;
