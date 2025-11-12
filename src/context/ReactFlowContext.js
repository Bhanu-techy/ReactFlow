import { createContext, useState, useEffect } from "react";
import metadata from "../metadata.json";
export const ReactFlowContext = createContext();

export const ReactFlowProvider = ({ children }) => {

    
   const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);


    useEffect(() => {
      if (nodes.length === 0){
        setNodes(metadata.nodes);
        setEdges(metadata.edges);
      }
  }, []);

  const addNode = (newNode) => {
  setNodes([...nodes, newNode])}

  const addEdge = newEdge => {
    setEdges([...edges, newEdge])
  }
  
  return (
    <ReactFlowContext.Provider
      value={{nodes, edges, setNodes, addNode, addEdge}}
    >
      {children}
    </ReactFlowContext.Provider>
  );
};
