import React from 'react';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
