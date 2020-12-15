import ApolloProvider from './ApolloProvider'
import {BrowserRouter as Router,Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <ApolloProvider>
      <Router>
        <Container>
        <MenuBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
