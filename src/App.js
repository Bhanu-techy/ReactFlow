import {useContext } from 'react';
import { ReactFlowContext } from './context/ReactFlowContext';
import Diagram from './components/Daigram';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {

  const {nodes, edges} = useContext(ReactFlowContext)  

  return (
    <div className="App">
      <nav>
        <h1>ReactFlow</h1>
        
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