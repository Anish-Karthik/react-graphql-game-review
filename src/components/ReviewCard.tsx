import { StarIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'

const limit = 300;

const ReviewCard = ({
  authorName,
  authorImage,
  rating,
  comment,
}: {
  authorName: string
  authorImage: string
  rating: number
  comment: string
}) => {
  const [show, setShow] = useState(false)
  return (
    <div className='flex w-full flex-col gap-2 border p-5 rounded-md'>
      <div className='flex items-center gap-3'>
        <img src={authorImage} alt={authorName} className='w-10 h-10 rounded-full' />
        <h1 className='text-xl font-bold'>{authorName}</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            {(new Array(rating)).fill(0).map((_, index) => (
              <span key={index} className='text-2xl'>⭐</span>
            ))}
            {(new Array(5-rating)).fill(0).map((_, index) => (
              <StarIcon key={index} className='text-yellow-500 ml-[0.4rem] mr-[0.1rem] mt-[0.125rem]' />
            ))}
          </div>
        </div>
        <div className='px-2'>
          {comment.length > limit && !show && 
            <p className='text-lg'>{comment.slice(0, limit)}...{<Button variant={"ghost"} className='!p-0 hover:bg-transparent -mt-3' onClick={() => setShow(true)}>Read more </Button>}</p>
          }
          {(comment.length <= limit || show) &&
            <p className='text-lg'>{comment}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewCard