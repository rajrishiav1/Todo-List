import React from 'react'

function ShowTodo(props) {
  return (
   
    <div className='container'>
        <div className="row">
            <div className="col-6">
                <h6>{props.task}</h6>
            </div>
            <div className="col-6" >
                <button onClick={()=>{
                    props.onSelcet(props.id)
                 }}   style={{margin:"2px",color:"red"}}>delete</button>
            </div>
        </div>
      
    </div>
   
   
  )
}

export default ShowTodo


