import { useState, useContext } from 'react'
import { ReactFlowContext } from '../../context/ReactFlowContext'
import './index.css'

function EdgeForm() {

  const {addEdge, edges} = useContext(ReactFlowContext)

  const [source, setSource] = useState("")
  const [target, setTarget ] = useState("")

  const onChangeSource = e =>{
    setSource(e.target.value)
  }

  const onChangeTarget = e => {
    setTarget(e.target.value)
  }

  const onClickAddEdge = e =>{
    e.preventDefault()
    const edge = {
      "id": `e${edges.length+1}`,
      "source": source,
      "target": target,
      "type": "smoothstep"}

    addEdge(edge)
    setTarget("")
    setSource("")
  }

  return (
    <form onSubmit={onClickAddEdge}>
          <h3>Edge Form</h3>
            <div className='input-div'>
            <label htmlFor='source'>Source: </label>
            <input type='text' id='source' onChange={onChangeSource} value={source}/>
            </div>
            <div className='input-div'>
            <label htmlFor='target'>Target: </label>
            <input type='text' id='Target' value={target} onChange={onChangeTarget}/>
            </div>
            <button type="submit">Add</button>
        </form>
  )
}

export default EdgeForm