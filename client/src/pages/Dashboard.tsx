import GameCard from '@/components/GameCard';
import { useGetGamesQuery } from '@/lib/graphql/generated/types-and-hooks';
import { Link } from 'react-router-dom';



const Dashboard = () => {
  const { loading, error, data } = useGetGamesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data!.games.map((game: any) => (
        <Link to={`/games/${game.id}`} key={game.id}>
          <GameCard
            name={game.name}
            description={game.description}
            image={game.image}
            price={game.price}
            platform={game.platform}
            company={game.company}
          />
        </Link>
      ))}
    </div>
  )
}

export default Dashboard