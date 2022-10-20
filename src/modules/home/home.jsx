import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postList } from './redux/homeActions'
import { setPostLoad } from '../posts/redux/postsActions'

import './home.scss'
import nls from './nls/pt-BR.json'
import { history } from '../../helpers/history'
import { IcoArrowDoubleRigth } from '../../components'

export default () => {
  const dispatch = useDispatch()
  const { posts, page } = useSelector((state) => state.homeState);
  const loaderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting){
        setCurrentPage(old => old + 1);
      }
    }, options);

    if (loaderRef.current){
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() =>{
    dispatchListPost({_page: page + 1, _limit: 5})
  }, [currentPage]);

  const handlePost = e => {
    dispatch(setPostLoad(e))
    history.push(`/posts/${e.id}`)
  }

  const dispatchListPost = ({_page, _limit}) => {
    dispatch(postList({params: {_page, _limit}}))
  }

  return (
    <div className='box-home'>
      <div className='box-home-cards'>
      {
        posts.map((e, i)=>{
          const articleDemo = String(e.article).length > 100 ? `${String(e.article).slice(0, 100)}...` : e.article
          return <div key={e.id} className='box-home-content' >
            {
              e.imageUrl?
              <div className='box-home-content-img'>
                <img src={e.imageUrl} title={e.title} />
              </div>
              :null
            }
            <div className='box-home-content-info'>
              <p>{e.author}</p>
              <h3 dangerouslySetInnerHTML={{__html: e.title}}></h3>
              <div dangerouslySetInnerHTML={{__html: articleDemo}}></div>
            </div>
            <div className='box-home-content-button-post' onClick={()=> handlePost(e)}>
              <IcoArrowDoubleRigth />
            </div>
          </div>
        })
      }
      </div>
      
      <p className='more-info' ref={loaderRef}>{nls.moreInfo}</p>
    </div>
  )
}
