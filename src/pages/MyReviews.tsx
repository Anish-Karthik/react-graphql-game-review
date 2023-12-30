import GameCard from "@/components/GameCard";
import ReviewCard from "@/components/ReviewCard";
import { useGetAuthorQuery, useGetMyReviewsQuery } from "@/lib/graphql/generated/types-and-hooks";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState<NodeJS.Timeout| null>(null);
  const { data: authorData, loading: authorDataLoading } = useGetAuthorQuery({
    variables: { authorId: userId || "" } ,
  });
  const { data, loading } = useGetMyReviewsQuery({
    variables: { authorId: userId || "" } ,
  });
  if (loading || authorDataLoading) return <div>Loading ...</div>
  if (userId) {
    if (loadingState) {
      clearTimeout(loadingState)
    }
  }
  console.log(data)
  if (!userId || !authorData?.author) {
    // navigate('/')
    if (!loadingState)
    setLoadingState(setTimeout(() => !userId && navigate(`/my-reviews`) || !authorData?.author && navigate(`/onboarding`), 3000))
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
        {!data?.author.reviews?.length && <p>No reviews yet</p>}
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
              reviewId={review.id}
              authorImage={data.author.image}
              authorName={data.author.name}
              content={review.content}
              rating={review.rating}
              isEditable={true}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default MyReviews