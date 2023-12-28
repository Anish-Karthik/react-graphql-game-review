
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import MyGames from './pages/MyGames';
import AddGame from './pages/AddGame';

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="games/:gameId" element={<Game />} />
          <Route path="my-games" element={<MyGames />} />
          <Route path="add-game" element={<AddGame />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
