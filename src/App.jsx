import React from 'react';
import Sidebar from './components/Base/Sidebar';

function App() {
  const x = 'a';
  return (
    <div className="App">
      {x}
      Hey
      <Sidebar />
    </div>
  );
}

export default App;
