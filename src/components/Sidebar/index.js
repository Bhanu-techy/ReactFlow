import NodeForm from '../NodeForm'
import EdgeForm from '../EdgeForm'
import './index.css'

function Sidebar() {
  return (
    <div className='sidebar-cont'>
        <h2>Sidebar</h2>
        <NodeForm/>
        <EdgeForm/>
    </div>
  )
}

export default Sidebar