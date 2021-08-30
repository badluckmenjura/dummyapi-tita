import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommentItem } from './commentItem';
import {
  emptyComents,
  getComents,
  retrieveComments,
} from './commentSlice';


export function Comment(props) {
  const comments = useSelector(retrieveComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComents(props.id))
    return ()=>dispatch(emptyComents())
  },[])


  return (
    <div>
      {
        comments.length == 0 &&
        <p>Este post no cuenta con comentarios</p>
      }
      {
        comments.map((comment, index) =>{
          return (
            < CommentItem {...comment} key={index}/>
          )
        }) 
      }
    </div>
  );
}