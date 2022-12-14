import React from 'react'

export const IcoPencil = ({style={}, cy=''}) => {
  return (
    <svg className='icon-pencil' viewBox='0 0 48 48' style={style} data-cy={`IcoPencil${cy}`}>
      <path d='M40.5 0c4.142 0 7.5 3.358 7.5 7.5 0 1.688-0.558 3.246-1.5 4.5l-3 3-10.5-10.5 3-3c1.254-0.942 2.811-1.5 4.5-1.5zM3 34.5l-3 13.5 13.5-3 27.75-27.75-10.5-10.5-27.75 27.75zM33.543 17.043l-21 21-2.585-2.585 21-21 2.585 2.585z'></path>
    </svg>
  )
}
