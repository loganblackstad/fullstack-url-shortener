import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './LoginForm';
import Register from './RegisterForm';

function App() {
  return (
    <div className="App">
      <p>Let's get this party started</p>
      <Login />
      <Register />
    </div>
  );
}

export default App;



