import GameCard from '@/components/GameCard';
import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';

const GET_GAMES = gql`
  query GetGames {
    games {
      id
      name
      description
      price
      platform
      company
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.games.map((game: any) => (
        <Link to={`/games/${game.id}`} key={game.id}>
          <GameCard
            name={game.name}
            description={game.description}
            image={"https://picsum.photos/700/700"}
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