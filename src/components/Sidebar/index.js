import { useContext, useState } from 'react'
import { ReactFlowContext } from '../../context/ReactFlowContext'
import NodeForm from '../NodeForm'
import EdgeForm from '../EdgeForm'
import './index.css'

const Sidebar= ()=>{

  const [nodeId, setNode] = useState(0)
  const [edgeId, setEdge] = useState(0)

  const {delNode, delEdge} = useContext(ReactFlowContext)

  return (
    <div className='sidebar-cont'>
        <h2>Sidebar</h2>
        <NodeForm />
        <EdgeForm/>
        <div className='del-form'>
          <h4>Delete Form</h4>
          <div className='del-input-div'>
            <label htmlFor='node'>Node id:</label>
            <input className='input' type='text' id="node" value={nodeId} onChange={(e) =>setNode(e.target.value)}/>
            <button onClick={()=>delNode(nodeId)} className='del-btn'>Delete</button>
          </div>
          
          <div className='del-input-div'>
            <label htmlFor='edge'>Edge id</label>
            <input type='text' className='input' id="edge" value={edgeId} onChange={(e)=>setEdge(e.target.value)}/>
            <button onClick={()=>delEdge(edgeId)} className='del-btn'>Delete</button>
          </div>
          
        </div>
    </div>
  )
}

export default Sidebar