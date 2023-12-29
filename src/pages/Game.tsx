import AddReview from '@/components/AddReview'
import GameCard from '@/components/GameCard'
import ReviewCard from '@/components/ReviewCard'
import { Button } from '@/components/ui/button'
import { CREATE_REVIEW } from '@/lib/grapql/mutations'
import { GET_GAME, GET_USER } from '@/lib/grapql/queries'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Game = () => {
  const { userId } = useAuth();
  const params = useParams()
  const navigate = useNavigate()
  const { data: authorData, loading: authorQueryLoading, error: authorQueryError, refetch } = useQuery(GET_USER, {
    variables: { authorId: userId } ,
  });
  const gameId = params.gameId
  const { data, loading, error,  } = useQuery(GET_GAME, {
    variables: { gameId }
  })
  const [addReview] = useMutation(CREATE_REVIEW, {
    refetchQueries: [
      GET_GAME,
    ],
  })
  if (!userId) {
    // navigate('/')
    setTimeout(() => navigate(`/games/${gameId}`), 3000)
  }
  console.log(authorData)
  if (loading || authorQueryLoading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  return (
    <div className='flex flex-col gap-8'>
      <GameCard
        name={data.game.name}
        description={data.game.description}
        image={data.game.image}
        price={data.game.price}
        platform={data.game.platform}
        company={data.game.company}
        review={data.game.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / data.game.reviews.length}
        totalReviews={data.game.reviews.length}
        view='horizontal'
      />
      <div className='flex flex-col gap-4'>
        <div className='w-full flex justify-between max-sm:flex-col gap-2 max-sm:justify-center'>
          <div>
            <h1 className='text-2xl font-bold'>Reviews</h1>
            <p className='text-sm'>{data.game.reviews.length} reviews</p>
          </div>
          <div className='flex flex-col gap-2'>
            <div>Add your Review</div>
            <AddReview gameId={gameId!} authorId={authorData.author.id!} addReview={addReview} />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          {data.game.reviews.map((review: any) => (
            <ReviewCard
              key={review.id}
              authorName={review.author.name}
              authorImage={review.author.image}
              rating={review.rating}
              comment={review.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game