import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MaskDataHora } from '../../components';
import { postLoad } from './redux/postsActions';
import nls from './nls/pt-BR.json'

import './posts.scss'

export default () => {
  const dispatch = useDispatch()
  const { idPost } = useParams()
  const { post } = useSelector((state) => state.postsState);
  const dateCustom = MaskDataHora(post.date, {language: 'en-US'})

  useEffect(()=> {
    dispatch(postLoad({params:{id: idPost}}))
  }, [])
  
  return (
    <div className='box-post'>
      <div className='box-post-content'>
        <div className='box-post-content-head'>
          {
            post.imageUrl?
            <div className='box-post-content-img'>
              <img src={post.imageUrl} title={post.title} />
            </div>
            :null
          }
          <div className='box-post-content-info'>
              <p>{dateCustom.data}</p>
              <p>{post.author}</p>
              <h3 dangerouslySetInnerHTML={{__html: post.title}}></h3>
          </div>
        </div>
        <div className='box-post-content-article'>
          <div dangerouslySetInnerHTML={{__html: post.article}}></div>
        </div>
      </div>
    </div>
  )
}
