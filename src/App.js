import React from 'react';

function App() {
  return (
    <>
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="check-btn"><i className="fas fa-bars"></i></label>
      <label className="logo">Design X</label>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li><input placeholder="Search"/></li>
        <li>Hello</li>
      </ul>
    </nav>
    <h1>Hello</h1>
    </>
  );
}

export default App;
