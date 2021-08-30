import React, {  useState } from 'react';
import { Author } from '../author/Author';
import { Modal } from '../modal/Modal';


export function AuthorHeader(props) {
  const [authorState, setAuthorState] = useState(false)
  const updateAuthorState = (state)=>{
    setAuthorState(state)
  }

  return (
    <div className="author">
      <img src={props.picture} onClick={() => setAuthorState(!authorState)}></img>
      <div className='user' onClick={() => setAuthorState(!authorState)}>
        <span className='name'>{props.firstName} {props.lastName}</span>
        <span className='date'>{props.publishDate}</span>
      </div>
      <Modal
        title='Autor'
        state={authorState}
        updateState={() => updateAuthorState()}
      >
        <Author id={props.id}></Author>
      </Modal>
    </div>
  );
}
