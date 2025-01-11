import React from 'react';
import Main from './Components/Main';
import Nav from './Components/Navbar';

function App() {
  return (
    <div>
      <Nav
                option1="00 HOME"
                option2="01 DESTINATION"
                option3="02 CREW"
                option4="03 TECHNOLOGY"
            />
      <Main />
    </div>
  );
}

export default App;
