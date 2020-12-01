import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider as Provider } from '@apollo/client'
//apollo config
const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
})
const client = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache()
})
export default function ApolloProvider(props) {
    return <Provider client={client} {...props} /> 
}
