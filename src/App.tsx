
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddGame from './pages/AddGame';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Landing from './pages/Landing';
import Layout from './pages/Layout';
import MyReviews from './pages/MyReviews';
import NoPage from './pages/NoPage';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="games/:gameId" element={<Game />} />
          <Route path="my-reviews" element={<MyReviews />} />
          <Route path="add-game" element={<AddGame />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
