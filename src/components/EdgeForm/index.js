import './index.css'

function EdgeForm() {
  return (
    <form>
          <h3>Edge Form</h3>
            <div className='input-div'>
            <label htmlFor='x'>X : </label>
            <input type='text' id='x'/>
            </div>
            <div className='input-div'>
            <label htmlFor='y'>y : </label>
            <input type='text' id='y'/>
            </div>
            <div className='input-div'>
            <label htmlFor='label'>label : </label>
            <input type='text' id='label'/>
            </div>
        </form>
  )
}

export default EdgeForm