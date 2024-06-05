import React from 'react';
import User from './components/User';



function App() {
  let message: string = "Hello React App"
  return (
    <div>
      <User message='This is a message' id={55}/>
    </div>
  );
}

export default App;
