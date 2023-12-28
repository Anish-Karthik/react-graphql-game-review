import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' || 'https://game-review-server-anish.onrender.com/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GamesQuery {
        games {
          name,
          company,
          reviews {
            rating,
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
