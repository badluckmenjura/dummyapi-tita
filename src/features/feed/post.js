import React, { useState, useEffect } from 'react';
import { Modal } from '../modal/Modal';
import { AuthorHeader } from '../authorHeader/AuthorHeader';
import { Comment } from '../comment/Comment';

export function Post(props)  {
  const [commentState, setCommetState] = useState(false);

  const updateCommetState = (state)=>{
    setCommetState(state)
  }

  return (
    <div className="box post">
      <AuthorHeader {...props.owner} publishDate={props.publishDate}></AuthorHeader>
      <div >
      <img className='picture' src={props.image}></img>
        <div>
          <p>{props.text}</p>
          <ul>
          {
            props.tags.map((tag, index) =>{
              return (
                <li key={index}>{tag}</li>
              )
            }) 
          }
          </ul>
          <div className='actions'>
            <button className='btn' disabled> Me Gusta {props.likes}</button>
            <button  className='btn' onClick={() => setCommetState(!commentState)}>Comentarios</button>
          </div>
        </div>
      </div>
      <Modal
        title='Comentarios'
        state={commentState}
        updateState={() => updateCommetState()}
      >
        <Comment id={props.id}></Comment>
      </Modal>
    
    </div>
  );
}
