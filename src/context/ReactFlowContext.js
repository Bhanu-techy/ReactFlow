import { createContext, useState, useEffect } from "react";
import metadata from "../metadata.json";
export const ReactFlowContext = createContext();

export const ReactFlowProvider = ({ children }) => {

    
   const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);


    useEffect(() => {
      if (nodes.length === 0 ){
        setNodes(metadata.nodes);
        setEdges(metadata.edges);
      }
  },[nodes])

  const addNode = (newNode) => {
  setNodes(prev => [...prev, newNode])}

  const addEdge = (newEdge) => {
    setEdges(prev => [...prev, newEdge])
  }

  const delNode = id => {
    setNodes(nodes.filter(node => node.id !==id))
  }

  const delEdge = id =>{
    setEdges(edges.filter(edge => edge.id !==id))
  }
  
  return (
    <ReactFlowContext.Provider
      value={{nodes, edges, setNodes, addNode, addEdge, delNode, delEdge}}
    >
      {children}
    </ReactFlowContext.Provider>
  );
};
