import React from 'react'
import { useDispatch } from 'react-redux'
import { IcoMenu, Menu } from '../components'
import nls from './nls/pt-BR.json'
import MenuJson from './app.json'

export default () => {
  const dispatch = useDispatch()

  const handleMenu = e => {
    console.log(e, 'handleMenu')
  }

  return (
    <header id='box-header'>
      <button
        className={false ? 'btn-menu open' : 'btn-menu'}
        onClick={() => null}
      >
        <IcoMenu />
      </button>
      <div className='box-logo'>
        <h1>{nls.applicationTitle}</h1>
      </div>
      <div className='box-menu'>
        <Menu data={MenuJson.menu} action={(e) => handleMenu(e)} />
      </div>
    </header>
  )
}
