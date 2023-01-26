import React from 'react'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'

export default function WatchList() {
  return (
    <div><div className='p-5 z-10'>
    <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 pl-5 border-b p-5'>
      Latest Movies
    </h2>
    <div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {[1,2,3,4,5].map(() => (
        <Card />
      ))}
    </div>
    <Pagination />
  </div></div>
  )
}
