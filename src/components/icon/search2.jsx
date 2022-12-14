import React from 'react'

export const IcoSearch = ({style={}, cy=''}) => {
  return (
    <svg className='icon-search' viewBox='0 0 48 48' style={style} data-cy={`IcoSearch${cy}`}>
      <path d='M46.512 40.847l-11.37-9.67c-1.175-1.058-2.432-1.543-3.448-1.497 2.684-3.144 4.305-7.222 4.305-11.68 0-9.941-8.059-18-18-18s-18 8.059-18 18 8.059 18 18 18c4.458 0 8.536-1.621 11.68-4.305-0.047 1.015 0.439 2.272 1.497 3.448l9.67 11.37c1.656 1.84 4.36 1.995 6.010 0.345s1.495-4.355-0.345-6.010zM18 30c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z'></path>
    </svg>
  )
}
