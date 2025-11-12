import { useContext, useState  } from 'react'
import { ReactFlowContext } from '../../context/ReactFlowContext'
import './index.css'

const NodeForm=() =>{
  
  const {nodes, addNode} = useContext(ReactFlowContext)

    const [xposition, setX] = useState(0)
    const [yposition, setY] = useState(0)
    const [label, setLabel] = useState("")

    const onChangeXposition = (e) =>{
        setX(e.target.value)
    }

    const onChangeYposition = e => {
        setY(e.target.value)
    }

    const onChangeLabel = e => {
        setLabel(e.target.value)
    }

    const onClickAddNode = (e) =>{
      e.preventDefault()
     const newNode = {
      "id": `${nodes.length + 1}`,
    'type': 'default',
    'position': { "x": xposition, "y": yposition },
    'data': { label }
    }
    addNode(newNode)
    console.log(newNode)
   }


  return (
     <form onSubmit={onClickAddNode}>
          <h3>Node Form</h3>
            <div className='input-div'>
            <label htmlFor='x'>X : </label>
            <input type='text' id='x' value={xposition} onChange={onChangeXposition}/>
            </div>
            <div className='input-div'>
            <label htmlFor='y'>y : </label>
            <input type='text' id='y' value={yposition} onChange={onChangeYposition}/>
            </div>
            <div className='input-div'>
            <label htmlFor='label'>label : </label>
            <input type='text' id='label' value={label} onChange={onChangeLabel}/>
            </div>
            <button type='submit'>Add</button>
        </form>
  )
}

export default NodeForm