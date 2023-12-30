import GameCard from "@/components/GameCard";
import ReviewCard from "@/components/ReviewCard";
import { useGetAuthorQuery, useGetGameReviewsQuery, useGetMyReviewsQuery } from "@/lib/graphql/generated/types-and-hooks";
import { useAuth } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const { data: authorData } = useGetAuthorQuery({
    variables: { authorId: userId || "" } ,
  });
  const { data } = useGetMyReviewsQuery({
    variables: { authorId: userId || "" } ,
  });
  if (!userId) {
    navigate('/')
  }
  if (!authorData?.author) {
    navigate('/onboarding')
  }

  return (
    <div className="flex flex-col gap-3">
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='w-full flex justify-between max-sm:flex-col gap-2 max-sm:justify-center'>
            <div>
              <h1 className='text-2xl font-bold'>My Reviews</h1>
              <p className='text-sm'>{data?.author.reviews?.length} reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {data?.author.reviews?.map((review) =>
          <div className="flex gap-2 flex-col p-2 shadow-md rounded-lg">
            <GameCard
              key={review.id}
              name={review.game.name}
              description={review.game.description}
              image={review.game.image}
              price={review.game.price}
              platform={review.game.platform}
              company={review.game.company}
            />
            <ReviewCard
              key={review.id}
              authorImage={data.author.image}
              authorName={data.author.name}
              comment={review.content}
              rating={review.rating}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default MyReviews