import React, { useState, useEffect } from 'react';

export function Modal(props) {
  const [state, setState] = useState(props.state);

  useEffect(() => {
    setState(props.state)
  })

  const updateState=(state)=>{
    props.updateState(state)
    setState(state)
  }
  
  return (
    <div>
      {
        state &&
        <div className='modal-container' >
          <div className='close-zone' onClick={() => updateState(false)}></div>
          <div className='modal box'>
            <button className='btn close' onClick={() => updateState(false)}>X</button>
              <h1>{props.title}</h1>
              {props.children}            
          </div>
        </div>
      }
    </div>
  );
}
