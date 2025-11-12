import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

function Diagram({ nodes, edges, onNodesChange, onEdgesChange }) {
    
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      />
    </div>
  );
}

export default Diagram