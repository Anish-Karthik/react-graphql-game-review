import { cn } from '@/lib/utils'
import { ActivityIcon } from 'lucide-react'

const GameCard = ({
  name,
  description,
  image,
  price,
  platform,
  company,
  view = "vertical",
  review: avgReview,
  totalReviews,
}: {
  name: string,
  description: string,
  image: string,
  price: number,
  platform: string,
  company: string,
  view?: "vertical" | "horizontal"
  review?: number
  totalReviews?: number
}) => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg h-full'>
      <div className={cn('flex gap-2 max-sm:flex-col', view === "vertical"? "flex-col" : "")}>
        <img src={image} alt={name} className={cn('w-full rounded-lg h-96 ', view === "horizontal"? "sm:h-72": "h-96")} />
        <div className={cn('flex flex-col justify-between h-full')}>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-sm'>{description}</p>
          </div>
          <div className='flex flex-col gap-3 font-semibold'>
            <p>Price: ${price}</p>
            <p>Platform: {platform}</p>
            <p>Company: {company}</p>
          </div>
          {avgReview && totalReviews && (
            <div className='flex flex-col mt-5'>
              <p>Avg Reviews: {Math.floor(avgReview)}.{Math.round((avgReview - Math.floor(avgReview)) * 10)}⭐</p>
              <div className='flex gap-1 items-center'>
                <p>Total Reviews: {totalReviews}</p> 
                <ActivityIcon className='text-yellow-400' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameCard