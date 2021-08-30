import React from 'react';
import { AuthorHeader } from '../authorHeader/AuthorHeader';

export function CommentItem(props)  {

  return (
    <div className='comment'>
      <AuthorHeader {...props.owner} publishDate={props.publishDate}></AuthorHeader>
      <div className="content">
        {props.message}
      </div>
    </div>
  );
}
