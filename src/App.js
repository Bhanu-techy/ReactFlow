import { useState, useEffect } from 'react';
import metadata from './metadata.json';
import Diagram from './components/Daigram';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    setNodes(metadata.nodes);
    setEdges(metadata.edges);
  }, []);

  const addNode = () => {
  const newNode = {
    id: `${nodes.length + 1}`,
    type: 'default',
    position: { x: 0, y: 0 },
    data: { label: 'New Node' }
  };
  setNodes([...nodes, newNode]);
};


  return (
    <div className="App">
      <nav>
        <h1>ReactFlow</h1>
        <button onClick={addNode}>AddNode</button>
      </nav>
      <hr className='hr-line'/>
      <div className='container'>
        <div className='sidebar'>
          <Sidebar/>
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