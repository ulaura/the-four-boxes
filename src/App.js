import React from 'react';
import Box from "./Box";


// Surprise. this can just be a functional component.
const App = () => {
  return (
    <div className="App">
      <div>
        <Box />
        <Box />
      </div>
      
      <div>
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default App;
