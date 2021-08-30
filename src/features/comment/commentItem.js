import React, { useState, useEffect } from 'react';
import { Modal } from '../modal/Modal';
import { AuthorHeader } from '../authorHeader/AuthorHeader';
import { Comment } from '../comment/Comment';

export function CommentItem(props)  {
  const [commentState, setCommetState] = useState(false);

  const updateCommetState = (state)=>{
    setCommetState(state)
  }

  return (
    <div>
      <AuthorHeader {...props.owner} publishDate={props.publishDate}></AuthorHeader>
      <div className="content">
        {props.message}
      </div>
    </div>
  );
}
