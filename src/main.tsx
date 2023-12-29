import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' || 'https://game-review-server-anish.onrender.com/graphql',
  cache: new InMemoryCache(),
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </ApolloProvider>,
)
