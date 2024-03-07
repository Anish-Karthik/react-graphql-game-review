import { useGetAuthorQuery } from '@/lib/graphql/generated/types-and-hooks';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { userId } = useAuth();
  console.log(userId)
  const navigate = useNavigate();
  const { data: authorData, loading: authorQueryLoading } = useGetAuthorQuery({
    variables: { authorId: userId! } ,
  });
  if (userId && authorQueryLoading) return <p>Loading...</p>;
  // if (userId ) return <p>Error : { authorQueryError?.message}</p>;
  if (authorData?.author) {
    navigate('/dashboard')
  }
  return (
    <div>Landing</div>
  )
}

export default Landing