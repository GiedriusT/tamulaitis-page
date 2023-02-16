import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
