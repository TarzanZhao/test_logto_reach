import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LogtoProvider, LogtoConfig, useLogto } from '@logto/react';

const config = {
  endpoint: 'http://localhost:3001',
  appId: 'gnVQpa0IiEff6LcmCXuvw',
};

const SignIn = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>已登录</div>;
  }

  return (
      <button onClick={() => signIn('http://localhost:3000/callback')}>
        登录
      </button>
  );
};


const App = () => (
    <LogtoProvider config={config}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SignIn />
        </header>
      </div>
    </LogtoProvider>
);


export default App;
