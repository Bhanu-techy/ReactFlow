import { useState, useEffect, useContext } from 'react';
import { ReactFlowContext } from './context/ReactFlowContext';
import metadata from './metadata.json'
import Diagram from './components/Daigram';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {

  const {nodes, edges, addNode} = useContext(ReactFlowContext)  

  return (
    <div className="App">
      <nav>
        <h1>ReactFlow</h1>
        <button onClick={addNode}>Add</button>
      </nav>
      <hr className='hr-line'/>
      <div className='container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <hr className='vr-line'/>
        <div className='reactflow'>
          <Diagram nodes={nodes} edges={edges}  />
        </div>
      </div>
      
    </div>
  );
}

export default App;