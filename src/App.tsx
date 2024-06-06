import React from 'react';
import User from './components/User';
import Profile from './components/Profile';
import Person from './components/Person';



function App() {
  let message: string = "Hello React App"
  return (
    <div>
      <User message='This is a message' id={55}/>
      <Profile message='This is Profile' isMen/>
      <Person />
    </div>
  );
}

export default App;
