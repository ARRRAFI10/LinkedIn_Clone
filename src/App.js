import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import RightPanel from './Rightside.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <RightPanel/>
      </div>
    </div>
  );
}

export default App;
