import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Link } from 'react-router-dom'
import RouterApp from './router/RouterApp';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <RouterApp />
    </QueryClientProvider>
  );
}

export default App;