import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'

console.log(window.location.href)

const SERVER_URL = window.location.href.includes('http://localhost:5173') ? 'http://localhost:4000' : 'https://game-review-server-anish.onrender.com'
console.log(SERVER_URL+'/graphql')

const client = new ApolloClient({
  uri: SERVER_URL+'/graphql',
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
