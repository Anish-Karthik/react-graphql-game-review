
import { useQuery, gql } from '@apollo/client';

const GET_GAMES = gql`
  query GetGames {
    games {
      id
      name
      description
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.games.map(({ id, name, description }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="200" height="250" alt="location-reference" src={"https://picsum.photos/200/250"} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default App
