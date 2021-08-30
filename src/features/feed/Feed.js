import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../header/Header';
import { Post } from './post';
import { getUserLogin } from '../login/loginSlice';
import {
  empyPosts,
  getPosts,
  listPosts,
} from './feedSlice';


export function Feed() {
  const posts = useSelector(listPosts);
  const user = useSelector(getUserLogin);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [tag, setTag] = useState('');

  useEffect(() => {
    if(user.email){
      dispatch(getPosts({limit:10, page: page, tag: tag}))
    }
    return ()=>dispatch(empyPosts())
  },[tag])

  useEffect(() => {
    window.onscroll = () => {
      let scrollPosition = window.innerHeight + window.scrollY
      let scrollHeight = document.activeElement.scrollHeight
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        setPage(page + 1)
        dispatch(getPosts({limit:10, page: page + 1, tag: tag} ))
      }
    };
  },[page,tag])

  const setTagSearch = (value)=>{
    setPage(0)
    setTag(value)
  }

  return (
    <div>
      <Header></Header>
      <div className='page feed'>
        <input className='search' placeholder='Buscar por Tag' value={tag} onChange={e => setTagSearch(e.target.value)}/>
        <div className="post-container">
        {
          posts.map((post, index) =>{
            return (
              < Post {...post} key={index}/>
            )
          }) 
        }
        </div>
      </div>
    </div>
  );
}
