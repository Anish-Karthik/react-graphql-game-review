import React from 'react'

const GameCard = ({
  name,
  description,
  image,
  price,
  platform,
  company
}: {
  name: string,
  description: string,
  image: string,
  price: number,
  platform: string,
  company: string
}) => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg h-full'>
      <div className='flex flex-col gap-2'>
        <img src={image} alt={name} className='w-full rounded-lg h-96' />
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='flex flex-col gap-1 font-semibold'>
          <p>Price: ${price}</p>
          <p>Platform: {platform}</p>
          <p>Company: {company}</p>
        </div>
      </div>
    </div>
  )
}

export default GameCard