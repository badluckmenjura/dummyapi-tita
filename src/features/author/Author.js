import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  emptyAuthor,
  getAuthor,
  retrieveAuthor,
} from './authorSlice';


export function Author(props) {
  const author = useSelector(retrieveAuthor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthor(props.id))
    return ()=>dispatch(emptyAuthor())
  },[])


  return (
    <div className='author-data'>
      <div className='row'>
        <span><b>Fecha de nacimiento</b></span>
        <span>{author.dateOfBirth}</span>
      </div>
      <div className='row'>
        <span><b>Email</b></span>
        <span>{author.email}</span>
      </div>
      <div className='row'>
        <span><b>Género</b></span>
        <span>{author.gender}</span>
      </div>
      <div className='row'>
        <span><b>País</b></span>
        <span>{author.location.country}</span>
      </div>
      <div className='row'>
        <span><b>Ciudad</b></span>
        <span>{author.location.city}</span>
      </div>
      <div className='row'>
        <span><b>Estado</b></span>
        <span>{author.location.state}</span>
      </div>
      <div className='row'>
        <span><b>Dirección</b></span>
        <span>{author.location.street}</span>
      </div>
      <div className='row'>
        <span><b>Teléfono</b></span>
        <span>{author.phone}</span>
      </div>
      <div className='row'>
        <span><b>Fecha de Registro</b></span>
        <span>{author.registerDate}</span>
      </div>
      <div className='row'>
        <span><b>Fecha de Actualización</b></span>
        <span>{author.updatedDate}</span>
      </div>
    </div>
  );
}