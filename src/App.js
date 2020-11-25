import './App.css';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello there dudes</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
